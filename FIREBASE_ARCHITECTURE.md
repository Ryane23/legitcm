# Firebase + Firestore Architecture Plan

## 1. Firebase Project Setup

### Services Required
- **Firestore Database**: Primary document store for all content
- **Firebase Storage**: Media uploads (event images, founder photos, pitch deck thumbnails)
- **Firebase Authentication** (optional): Secure admin access
- **Realtime Capabilities**: Automatic UI updates when content changes

### Configuration
```
Project: legit-cm-admin (or similar)
Region: us-central1 (or nearest to your users)
Billing: Pay-as-you-go (Firestore has free tier: 50k reads/day)
```

---

## 2. Firestore Collection Structure

### Root Collections

#### `events` Collection
Documents represent individual startup events.

**Document Structure:**
```
{
  id: "auto-generated",
  title: "Demo Day 2026",
  description: "Showcase your startup to investors",
  date: Timestamp(2026-05-15),
  endDate: Timestamp(2026-05-15T18:00:00),
  location: "Innovation Hub, Downtown",
  category: "demo-day", // enum: demo-day | workshop | networking | roundtable | pitch-session
  image: "gs://bucket/events/demo-day-1.jpg",
  featured: true,
  status: "published", // enum: draft | published | archived
  capacity: 150,
  registrations: 42,
  speakers: ["founder-id-1", "investor-id-2"],
  agenda: [
    { time: "2:00 PM", description: "Registration opens" },
    { time: "3:00 PM", description: "Opening remarks" }
  ],
  createdAt: Timestamp,
  updatedAt: Timestamp,
  createdBy: "admin-user-id"
}
```

**Subcollection: `events/{eventId}/registrations`**
```
{
  id: "auto-generated",
  userId: "user-id",
  email: "startup@example.com",
  name: "Jane Founder",
  company: "TechStart Inc",
  registeredAt: Timestamp,
  status: "confirmed" // enum: pending | confirmed | checked-in | no-show
}
```

---

#### `pitch-tracks` Collection
Documents represent pitch program funding tracks.

**Document Structure:**
```
{
  id: "auto-generated",
  name: "Pre-Seed Acceleration",
  description: "Ideal for early-stage ideas",
  fundingCap: 250000, // in USD
  fundingFloor: 50000,
  equityTaken: 5, // percentage
  fundingTerms: "SAFE",
  focusAreas: ["AI", "Climate", "FinTech"],
  mentorCount: 8,
  successRate: 75, // percentage
  image: "gs://bucket/tracks/preseed.jpg",
  benefits: [
    "Funding up to $250K",
    "Expert 1-on-1 mentorship",
    "Network access"
  ],
  order: 1, // for display sorting
  status: "active", // enum: active | inactive | archived
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

#### `pitch-applications` Collection
Documents represent startup pitches submitted.

**Document Structure:**
```
{
  id: "auto-generated",
  trackId: "pitch-tracks/pre-seed-id",
  companyName: "TechStart AI",
  founderEmail: "founder@techstart.com",
  founderName: "Alex Founder",
  description: "AI-powered supply chain optimization",
  pitchDeckUrl: "gs://bucket/pitches/deck-1.pdf",
  videoUrl: "gs://bucket/pitches/video-1.mp4",
  website: "https://techstart.example.com",
  fundingTarget: 200000,
  startupStage: "seed", // enum: idea | pre-seed | seed | series-a
  teamSize: 3,
  status: "under-review", // enum: submitted | under-review | accepted | rejected | fund-closed
  ratings: {
    marketFit: 8,
    team: 9,
    traction: 6,
    product: 7
  },
  notes: "Strong team, good market, needs more user validation",
  submittedAt: Timestamp,
  updatedAt: Timestamp,
  reviewedBy: "admin-user-id",
  reviewedAt: Timestamp
}
```

---

#### `founders` Collection
Documents represent featured founder profiles.

**Document Structure:**
```
{
  id: "auto-generated",
  name: "Sarah Chen",
  title: "CEO & Co-founder",
  company: "AI Ventures Labs",
  bio: "10+ years in machine learning and startup scaling",
  photo: "gs://bucket/founders/sarah-chen.jpg",
  socialLinks: {
    twitter: "https://twitter.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  focusAreas: ["AI", "Climate"],
  featured: true,
  order: 1,
  createdAt: Timestamp
}
```

---

#### `cms-content` Collection
Documents for dynamic page content (hero text, stats, CTAs).

**Document Structure:**
```
{
  id: "auto-generated",
  page: "home", // enum: home | events | pitch | about
  section: "hero", // enum: hero | stats | upcoming-events | footer | etc
  content: {
    // Flexible schema per section
    // Example for hero:
    headline: "Build, Connect, Launch",
    subheadline: "Join 5000+ founders in our ecosystem",
    ctaText: "Join Event",
    ctaLink: "/events"
  },
  isActive: true,
  order: 1,
  lastUpdatedBy: "admin-user-id",
  lastUpdatedAt: Timestamp
}
```

---

#### `media` Collection
Metadata for uploaded files (images, videos).

**Document Structure:**
```
{
  id: "auto-generated",
  filename: "event-banner-may-2026.jpg",
  storagePath: "gs://bucket/events/event-banner-may-2026.jpg",
  type: "image", // enum: image | video | document
  mimeType: "image/jpeg",
  sizeBytes: 2048000,
  uploadedAt: Timestamp,
  uploadedBy: "admin-user-id",
  tags: ["event", "may-2026"],
  usedIn: [
    { collection: "events", documentId: "event-id-1" }
  ]
}
```

---

## 3. Security Rules (Firestore)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Admin-only collections
    match /admins/{document=**} {
      allow read, write: if request.auth.token.admin == true;
    }
    
    match /events/{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth.token.admin == true;
    }
    
    match /pitch-tracks/{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth.token.admin == true;
    }
    
    match /pitch-applications/{document=**} {
      allow read: if request.auth.uid == resource.data.founderEmail || 
                     request.auth.token.admin == true;
      allow create: if true; // Public can submit
      allow update: if request.auth.token.admin == true;
    }
    
    match /founders/{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth.token.admin == true;
    }
    
    match /cms-content/{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth.token.admin == true;
    }
    
    match /media/{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth.token.admin == true;
    }
  }
}
```

---

## 4. Real-time Features

### Live Sync Scenarios
1. **Admin Dashboard to Public Site**: When admin publishes an event, home/events pages update automatically
2. **Registration Counter**: Event registration count updates in real-time as users apply
3. **Content Updates**: Hero text, stats, CTAs refresh across all page versions without redeploy

### Implementation Pattern
- Use Firestore listeners in Next.js with `useEffect` + `onSnapshot`
- Cache layer using React Context or Zustand for state management
- ISR (Incremental Static Regeneration) for SEO + real-time hybrid approach

---

## 5. Firebase Storage Structure

```
firebase-storage/
├── events/
│   ├── event-1-banner.jpg
│   ├── event-2-banner.jpg
│   └── ...
├── founders/
│   ├── sarah-chen.jpg
│   ├── alex-founder.jpg
│   └── ...
├── pitch-tracks/
│   ├── preseed-icon.jpg
│   ├── series-a-icon.jpg
│   └── ...
├── pitch-submissions/
│   ├── startup-1-deck.pdf
│   ├── startup-1-video.mp4
│   └── ...
└── media/
    └── (temporary uploads during form submission)
```

**Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Public read access
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Write access only for admins
    match /{allPaths=**} {
      allow write: if request.auth.token.admin == true;
    }
  }
}
```

---

## 6. Authentication Model

### Admin Users Table (in Firestore)
```
collection: admins
{
  uid: "firebase-auth-uid",
  email: "admin@legit.cm",
  name: "Admin Name",
  role: "super-admin", // enum: super-admin | editor | reviewer
  permissions: {
    events: ["create", "read", "update", "delete"],
    pitchTracks: ["read", "update"],
    pitchApplications: ["read", "update"],
    founders: ["create", "read", "update", "delete"],
    cmsContent: ["create", "read", "update", "delete"],
    media: ["upload", "delete"]
  },
  status: "active", // enum: active | suspended
  createdAt: Timestamp,
  lastLogin: Timestamp
}
```

### Role Definitions
- **Super Admin**: Full access to all CRUD operations
- **Editor**: Create/edit events, founders, content; review pitches
- **Reviewer**: View-only access to submissions for feedback

---

## 7. Integration Points with Next.js

### Admin Dashboard Routes
```
/admin/
├── login                    (Firebase Auth)
├── dashboard               (Overview + quick stats)
├── events
│   ├── index               (List all events)
│   ├── [id]/edit           (Edit event details)
│   └── new                 (Create event)
├── pitch-tracks
│   ├── index               (List tracks)
│   └── [id]/view           (View track + applications)
├── pitch-applications
│   ├── index               (Pending applications)
│   └── [id]/review         (Review & rate startup)
├── founders
│   ├── index               (List founders)
│   ├── [id]/edit           (Edit founder profile)
│   └── new                 (Add founder)
├── content
│   ├── home-page           (Edit home CMS blocks)
│   ├── events-page         (Edit events page CMS)
│   ├── pitch-page          (Edit pitch page CMS)
│   └── about-page          (Edit about page CMS)
└── media
    └── library             (Manage uploaded media)
```

### Public Website Routes (Updated)
- All existing routes remain `/` `/events`, `/pitch`, `/about`, `/community`, etc.
- Pages now fetch from Firestore instead of hardcoded arrays
- ISR regeneration on content updates

---

## 8. Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Create Firebase project & configure credentials
- [ ] Design & test Firestore schema
- [ ] Set up authentication system (Firebase Auth)
- [ ] Create admin login/dashboard scaffold
- [ ] Implement Firestore SDK in Next.js project

### Phase 2: Content Management (Week 3-4)
- [ ] Build CRUD pages for Events
- [ ] Build CRUD pages for Pitch Tracks
- [ ] Build CRUD pages for Founders
- [ ] Build CMS content editor for homepage/pages
- [ ] Add media upload + management interface

### Phase 3: Public Site Integration (Week 5-6)
- [ ] Migrate home page to fetch from Firestore
- [ ] Migrate events page to fetch from Firestore
- [ ] Migrate pitch page to fetch from Firestore
- [ ] Migrate about page to fetch from Firestore
- [ ] Add real-time sync for live updates

### Phase 4: Advanced Features (Week 7-8)
- [ ] Pitch application submission system
- [ ] Reviewer scoring/notes system
- [ ] Event registration flow
- [ ] Analytics & reporting dashboard
- [ ] Backup & data export utilities

---

## 9. Cost Estimation

### Firestore Pricing (Pay-as-you-go)
- **Reads**: $0.06 per 100K reads
- **Writes**: $0.18 per 100K writes
- **Deletes**: $0.02 per 100K deletes
- **Free tier**: 50K reads/day, 20K writes/day

**Estimated monthly cost** (assuming 10K daily active users):
- Reads: ~5-10M/month ≈ $300-600
- Writes: ~1-2M/month ≈ $180-360
- **Total: $500-1000/month** (can optimize with caching)

### Firebase Storage
- **Storage**: $0.18 per GB/month
- **Download**: $0.12 per GB
- Estimated: $50-200/month for media

---

## 10. Migration Strategy

### From Hardcoded to Firestore

1. **Backup existing data**
   - Export current events/founders/content as JSON
   - Keep in version control as reference

2. **Data import script**
   - Create Node.js script to batch-import hardcoded data into Firestore
   - Run validation checks post-import

3. **Dual-read period** (optional)
   - Serve content from both hardcoded + Firestore
   - Fallback to hardcoded if Firestore fails

4. **Full cutover**
   - Once verified, remove hardcoded data from code
   - Deploy changes to production

---

## 11. Performance Optimizations

### Caching Strategy
- **Client-side**: React Context/Zustand for admin dashboard
- **Edge caching**: Page revalidation on content updates
- **Firestore indexes**: Auto-created for common queries (category, status, date)

### Query Optimization
```javascript
// Example: Fetch published events, ordered by date
db.collection('events')
  .where('status', '==', 'published')
  .orderBy('date', 'desc')
  .limit(10)
```

### Batch Operations
- Use batch writes for multi-document updates (e.g., bulk event status changes)
- Implement transaction support for consistency

---

## 12. Monitoring & Analytics

### Key Metrics to Track
- Firestore read/write latency
- Admin login frequency
- Content update frequency
- Public site traffic patterns
- Storage usage growth

### Firebase console features
- Firestore usage dashboard
- Storage space visualization
- Performance insights
- Error tracking with Sentry (optional)

---

## Next Steps

1. **Create Firebase project** at console.firebase.google.com
2. **Download service account key** for Next.js backend authentication
3. **Install Firebase SDK**: `npm install firebase firebase-admin`
4. **Set up environment variables** with Firebase config
5. **Create Firestore collections** with initial test data
6. **Build admin login screen** with Firebase Authentication

Ready to proceed with implementation? Start with Phase 1 setup.
