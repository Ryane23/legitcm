# Admin Dashboard - Complete Implementation Guide

## Overview
Comprehensive admin dashboard for managing all website content. This document tracks all functionalities, todos, and implementation details for the Legit.cm admin system.

**Status**: Planning → Development  
**Database**: Firebase + Firestore  
**Authentication**: Firebase Auth  
**Storage**: Firebase Storage  

---

## Table of Contents
1. [Phase Breakdown](#phase-breakdown)
2. [Complete Todo List](#complete-todo-list)
3. [Admin Features](#admin-features)
4. [User Roles & Permissions](#user-roles--permissions)
5. [Implementation Timeline](#implementation-timeline)
6. [Deployment Checklist](#deployment-checklist)

---

## Phase Breakdown

### Phase 1: Foundation (Firebase Setup & Auth)
**Duration**: Week 1-2  
**Priority**: Critical  
**Blockers**: None

#### Tasks
- [ ] Firebase project setup & config
- [ ] Install Firebase & Admin SDK
- [ ] Create Firestore collections & schema
- [ ] Configure Firebase security rules
- [ ] Set up Firebase Authentication

**Outcome**: Firebase project live, authentication system functional, Firestore collections created with test data.

---

### Phase 2: Admin Authentication & Dashboard Core
**Duration**: Week 2-3  
**Priority**: Critical  
**Blockers**: Phase 1 completion

#### Tasks
- [ ] Build admin login/signup screen
- [ ] Create admin dashboard home/overview
- [ ] Build role-based access control
- [ ] Build admin dashboard navigation/sidebar

**Outcome**: Admin login working, dashboard scaffold ready, RBAC system in place.

---

### Phase 3: Event Management
**Duration**: Week 3-4  
**Priority**: High  
**Blockers**: Phase 2 completion

#### Tasks
- [ ] Create events list page (/admin/events)
- [ ] Build event creation form
- [ ] Build event editing/update form
- [ ] Add event deletion & archive functionality
- [ ] Build event registration viewer

**Outcome**: Full events CRUD functionality, registration tracking.

---

### Phase 4: Pitch Program Management
**Duration**: Week 4-5  
**Priority**: High  
**Blockers**: Phase 2 completion

#### Tasks
- [ ] Create pitch tracks list page
- [ ] Build pitch track editor/updater
- [ ] Create pitch applications list/filter page
- [ ] Build pitch app review interface with scoring
- [ ] Add pitch app approval/rejection workflow

**Outcome**: Pitch program fully managed, applications reviewable with scoring system.

---

### Phase 5: Content Management System
**Duration**: Week 5-6  
**Priority**: Medium  
**Blockers**: Phase 2 completion

#### Tasks
- [ ] Create founders list page
- [ ] Build founder creation form
- [ ] Build founder editing/update form
- [ ] Add founder deletion & archiving
- [ ] Build CMS editor for home page sections
- [ ] Build CMS editor for events page sections
- [ ] Build CMS editor for pitch page sections
- [ ] Build CMS editor for about page sections

**Outcome**: All website content manageable from dashboard without code changes.

---

### Phase 6: Media Management
**Duration**: Week 6-7  
**Priority**: High  
**Blockers**: Phase 2 completion

#### Tasks
- [ ] Create media upload/library interface
- [ ] Set up Firebase Storage integration
- [ ] Build image cropping & optimization
- [ ] Add media tagging & metadata system
- [ ] Build media deletion & cleanup

**Outcome**: Centralized media library, automatic image optimization.

---

### Phase 7: Real-time Sync & Data Migration
**Duration**: Week 7-8  
**Priority**: High  
**Blockers**: Phase 3, 4, 5 completion

#### Tasks
- [ ] Set up real-time listeners for live sync
- [ ] Create Firestore data import script
- [ ] Migrate home page to fetch from Firestore
- [ ] Migrate events page to fetch from Firestore
- [ ] Migrate pitch page to fetch from Firestore
- [ ] Migrate about page to fetch from Firestore

**Outcome**: Public website fully connected to admin dashboard, real-time content updates.

---

### Phase 8: Advanced Features & Administration
**Duration**: Week 8-9  
**Priority**: Medium  
**Blockers**: Phase 7 completion

#### Tasks
- [ ] Add admin user management interface
- [ ] Create activity/audit log system
- [ ] Build analytics dashboard (views, conversions)
- [ ] Set up error tracking & monitoring
- [ ] Create data backup & export utilities
- [ ] Add batch operations (bulk update/delete)
- [ ] Build admin dashboard search functionality
- [ ] Create admin settings page (notifications, etc)
- [ ] Add email notifications for admin actions

**Outcome**: Advanced admin capabilities, analytics, and monitoring.

---

### Phase 9: Testing, Polish & Deployment
**Duration**: Week 9-10  
**Priority**: Critical  
**Blockers**: All previous phases

#### Tasks
- [ ] Test all admin features & fix bugs
- [ ] Deploy admin dashboard to production
- [ ] Set up admin dashboard documentation/guide

**Outcome**: Live production admin dashboard, fully documented and tested.

---

## Complete Todo List

### ✅ Phase 1: Firebase Foundation
1. [ ] Firebase project setup & config
2. [ ] Install Firebase & Admin SDK
3. [ ] Create Firestore collections & schema
4. [ ] Configure Firebase security rules
5. [ ] Set up Firebase Authentication

### ✅ Phase 2: Authentication & Core Dashboard
6. [ ] Build admin login/signup screen
7. [ ] Create admin dashboard home/overview
8. [ ] Build role-based access control
9. [ ] Build admin dashboard navigation/sidebar

### ✅ Phase 3: Event Management
10. [ ] Create events list page (/admin/events)
11. [ ] Build event creation form
12. [ ] Build event editing/update form
13. [ ] Add event deletion & archive functionality
14. [ ] Build event registration viewer

### ✅ Phase 4: Pitch Program Management
15. [ ] Create pitch tracks list page
16. [ ] Build pitch track editor/updater
17. [ ] Create pitch applications list/filter page
18. [ ] Build pitch app review interface with scoring
19. [ ] Add pitch app approval/rejection workflow

### ✅ Phase 5: Content Management System
20. [ ] Create founders list page
21. [ ] Build founder creation form
22. [ ] Build founder editing/update form
23. [ ] Add founder deletion & archiving
24. [ ] Build CMS editor for home page sections
25. [ ] Build CMS editor for events page sections
26. [ ] Build CMS editor for pitch page sections
27. [ ] Build CMS editor for about page sections

### ✅ Phase 6: Media Management
28. [ ] Create media upload/library interface
29. [ ] Set up Firebase Storage integration
30. [ ] Build image cropping & optimization
31. [ ] Add media tagging & metadata system
32. [ ] Build media deletion & cleanup

### ✅ Phase 7: Real-time Sync & Data Migration
33. [ ] Set up real-time listeners for live sync
34. [ ] Create Firestore data import script
35. [ ] Migrate home page to fetch from Firestore
36. [ ] Migrate events page to fetch from Firestore
37. [ ] Migrate pitch page to fetch from Firestore
38. [ ] Migrate about page to fetch from Firestore

### ✅ Phase 8: Advanced Administration
39. [ ] Add admin user management interface
40. [ ] Create activity/audit log system
41. [ ] Build analytics dashboard (views, conversions)
42. [ ] Set up error tracking & monitoring
43. [ ] Create data backup & export utilities
44. [ ] Add batch operations (bulk update/delete)
45. [ ] Build admin dashboard search functionality
46. [ ] Create admin settings page (notifications, etc)
47. [ ] Add email notifications for admin actions

### ✅ Phase 9: Testing & Deployment
48. [ ] Test all admin features & fix bugs
49. [ ] Deploy admin dashboard to production
50. [ ] Set up admin dashboard documentation/guide

---

## Admin Features

### 1. Event Management
**Routes**: `/admin/events`

#### Features
- **Event Listing**
  - Table view with sortable columns (title, date, status, registrations)
  - Filter by category (demo-day, workshop, networking, roundtable, pitch-session)
  - Filter by status (draft, published, archived)
  - Search by event title or location
  - Bulk actions (publish, archive, delete)

- **Event Creation**
  - Form fields: title, description, date, time, end date, location, category
  - Image/banner upload with preview
  - Add event speakers (multi-select)
  - Define event agenda (add/remove agenda items with time and description)
  - Set capacity and pricing (if applicable)
  - SEO fields (slug, meta description, keywords)
  - Publish/Draft status toggle
  - Save as draft or publish immediately

- **Event Editing**
  - Modify all event fields
  - View live registration count
  - Update event image
  - Change event status (draft → published → archived)
  - Add/remove speakers in real-time
  - Update agenda items

- **Event Registration Viewer**
  - Table of registered attendees (name, email, company, registration date)
  - Export registrations as CSV
  - Filter by status (confirmed, checked-in, no-show)
  - Check-in functionality (mark as attended)
  - Email registered attendees

---

### 2. Pitch Program Management
**Routes**: `/admin/pitch-tracks`, `/admin/pitch-applications`

#### Features
- **Funding Tracks**
  - List all active/inactive tracks
  - Edit track details (name, funding range, equity %, benefits)
  - Upload track icon/image
  - Reorder tracks for display
  - Activate/deactivate tracks
  - View applications per track

- **Pitch Applications**
  - List all submissions with status filters
  - Search by startup name or founder email
  - View full application (pitch deck, video, business description)
  - Scoring interface: rate across Market Fit (0-10), Team (0-10), Traction (0-10), Product (0-10)
  - Add reviewer notes and feedback
  - Change application status (submitted → under-review → accepted/rejected → fund-closed)
  - Email founder with decision
  - Export applications with scores
  - Bulk status update (e.g., accept all 8/10+ rated apps)

---

### 3. Founder Management
**Routes**: `/admin/founders`

#### Features
- **Founder Listing**
  - Table of all founders with photo, name, company, focus areas
  - Filter by featured/not featured
  - Search by name or company
  - Bulk toggle featured status

- **Founder Creation**
  - Form: name, title, company, bio, photo upload
  - Social links (Twitter, LinkedIn, etc.)
  - Focus areas (multi-select tags: AI, Climate, FinTech, etc.)
  - Display order for homepage
  - Featured toggle
  - Save and add another

- **Founder Editing**
  - Update all founder fields
  - Change photo (with crop preview)
  - Modify social links and focus areas
  - Reorder on homepage
  - Archive founder (remove from public view)

---

### 4. Content Management System (CMS)
**Routes**: `/admin/content`

#### Features
- **Home Page CMS**
  - Editor for "Build, Connect, Launch" hero section
  - Edit stats (startup count, founders count, events count)
  - Manage upcoming events section (auto-feeds from events collection)
  - Edit founder showcase section
  - Manage footer CTAs and links

- **Events Page CMS**
  - Edit page title and description
  - Manage featured event display rules
  - Edit category filter labels
  - Customize empty state messages

- **Pitch Page CMS**
  - Edit pitch program intro text
  - Manage funding track ordering
  - Customize "Submit Your Pitch" CTA text
  - Edit success story section

- **About Page CMS**
  - Edit vision statement and company description
  - Manage values/mission cards
  - Customize founder community section text
  - Managing documentary/video section

---

### 5. Media Management
**Routes**: `/admin/media`

#### Features
- **Media Library**
  - Grid/list view of all uploaded images
  - Filter by type (event, founder, track, general)
  - Search by filename or tags
  - View image metadata (size, upload date, usage)
  - Bulk delete unused media
  - Sort by date uploaded, file size, usage count

- **Media Upload**
  - Drag & drop or click to upload
  - Multiple file upload
  - Image preview before upload
  - Auto-optimization (resize, compress, convert to WebP)
  - Tags and metadata input during upload
  - Progress bar with upload speed

- **Image Editor**
  - Crop to specific aspect ratios (16:9 for event banners, 1:1 for avatars)
  - Rotate and flip
  - Auto-enhance (brightness, contrast, saturation)
  - Batch processing (apply crop to multiple similar images)

---

### 6. Admin User Management
**Routes**: `/admin/users`

#### Features
- **Admin Listing**
  - Table of all admin users (email, name, role, last login, status)
  - Active/suspended filter

- **Add/Invite Admin**
  - Form: email, name, role selection (super-admin, editor, reviewer)
  - Send invite link via email
  - Set expiration for invite (24-48 hours)

- **Edit Admin**
  - Change role
  - Suspend/reactivate account
  - View user activity/login history

- **Permissions Management**
  - Define what each role can do
  - Super Admin: all permissions
  - Editor: create/edit events, founders, content
  - Reviewer: read-only access to pitch applications, can add notes/scores

---

### 7. Activity & Audit Logs
**Routes**: `/admin/activity`

#### Features
- **Activity Log**
  - Chronological list of all admin actions
  - Log entry: who, what, when (created event, edited founder, published content)
  - Filter by user, action type, date range
  - Search by resource name
  - Export log as CSV

- **User Activity**
  - Per-admin breakdown of recent actions
  - Last login from each admin
  - Total actions by admin (for usage insights)

---

### 8. Analytics Dashboard
**Routes**: `/admin/analytics`

#### Features
- **Overview Stats**
  - Total events created this month
  - Total pitch applications received
  - Total website visitors (integrates with Google Analytics optional)
  - Engagement metrics (click-through rates on CTAs)

- **Event Analytics**
  - Registrations per event (chart)
  - Most popular event category
  - Registration trend (over time)
  - Attendance rate (registered vs. checked in)

- **Pitch Analytics**
  - Applications per track (pie chart)
  - Average scores by track
  - Acceptance rate
  - Funding distributed

- **Custom Reports**
  - Date range selector
  - Metric selection
  - Export to PDF/CSV

---

### 9. Admin Settings
**Routes**: `/admin/settings`

#### Features
- **Notifications**
  - Email on new pitch application
  - Digest email (daily/weekly summary)
  - Event reminder notifications

- **API Keys**
  - Generate/revoke API keys for integrations
  - View key usage

- **Backup & Export**
  - Manual data backup trigger
  - Schedule automatic daily/weekly backups
  - Export all data as JSON

- **System Status**
  - Firebase connection status
  - Storage usage (quota tracking)
  - API rate limits and usage

---

## User Roles & Permissions

### Super Admin
- ✅ All CRUD operations on all resources
- ✅ Invite/manage other admins
- ✅ Access all audit logs
- ✅ Configure system settings
- ✅ Export and manage backups
- ✅ View all analytics

### Editor
- ✅ Create/edit/delete events
- ✅ Create/edit/delete founders
- ✅ Edit CMS content (all pages)
- ✅ Upload and manage media
- ✅ Manage pitch tracks (edit only, not delete)
- ❌ View/accept pitch applications
- ❌ Manage admin users
- ❌ Access audit logs
- ❌ Configure system settings

### Reviewer
- ✅ View all pitch applications
- ✅ Score applications
- ✅ Add notes to applications
- ✅ Change application status (review workflow)
- ❌ Create/edit resources
- ❌ Upload media
- ❌ Access other sections

---

## Implementation Timeline

### Week 1-2: Foundation
**Deliverable**: Firebase project live, auth system functional
```
Mon-Tue: Firebase setup, Firestore schema design, security rules
Wed-Thu: SDK installation, test data import
Fri: Testing, documentation
```

### Week 3: Core Dashboard & Authentication
**Deliverable**: Admin login working, dashboard scaffold, RBAC system
```
Mon-Tue: Login/signup UI, session management
Wed: Dashboard overview page
Thu-Fri: RBAC implementation, testing
```

### Week 4: Event Management
**Deliverable**: Full events CRUD + registration viewer
```
Mon: Events list page
Tue: Event creation form
Wed: Event editing and deletion
Thu: Registration viewer
Fri: Testing, refinements
```

### Week 5: Pitch Program
**Deliverable**: Tracks and applications management
```
Mon: Pitch tracks list & editor
Tue-Wed: Application review interface with scoring
Thu: Status workflow and email notifications
Fri: Testing
```

### Week 6: Content & Media
**Deliverable**: CMS editors, media library functional
```
Mon-Tue: CMS editors for all pages
Wed-Thu: Media upload, storage, image optimization
Fri: Testing, refinements
```

### Week 7: Real-time & Migration
**Deliverable**: Public website fully connected to admin dashboard
```
Mon-Tue: Real-time listeners setup
Wed: Data import/migration script
Thu-Fri: Migrate public pages to Firestore, testing
```

### Week 8-9: Advanced Features & Deployment
**Deliverable**: Live production dashboard
```
Days 1-3: Admin user management, audit logs, analytics
Days 4-5: Search, settings, backup/export
Days 6-8: Full testing, bug fixes
Days 9-10: Production deployment, documentation
```

---

## Deployment Checklist

### Pre-Deployment
- [ ] All 50 todos completed
- [ ] Code review completed
- [ ] Unit tests passing (80%+ coverage)
- [ ] Integration tests for Firestore operations
- [ ] Performance testing (load test admin dashboard)
- [ ] Security audit (Firebase rules reviewed)
- [ ] Staging environment tested
- [ ] Documentation complete and reviewed

### Deployment Day
- [ ] Backup production data
- [ ] Deploy backend (Firebase functions if applicable)
- [ ] Deploy admin dashboard
- [ ] Deploy updated public website (with Firestore integration)
- [ ] Run smoke tests
- [ ] Monitor logs for errors
- [ ] Notify team of deployment

### Post-Deployment
- [ ] Monitor user activity for 48 hours
- [ ] Collect feedback from admins
- [ ] Fix critical bugs immediately
- [ ] Schedule follow-up refinements
- [ ] Update documentation with lessons learned

---

## Success Metrics

✅ **Admin dashboard is considered successful when:**
1. Admins can manage all content without code changes
2. Real-time sync working (content updated on public site <5 seconds after publish)
3. Zero unplanned downtime
4. Admin operations complete in <3 seconds on average
5. All 50 admins trained and actively using system
6. User satisfaction score >4.2/5
7. <1% data entry errors
8. Zero security incidents

---

## Contact & Resources

**Firebase Documentation**: [console.firebase.google.com](https://console.firebase.google.com)  
**Architecture Reference**: [FIREBASE_ARCHITECTURE.md](FIREBASE_ARCHITECTURE.md)  
**Next.js Documentation**: [nextjs.org](https://nextjs.org)  
**Firestore Best Practices**: [firebase.google.com/docs](https://firebase.google.com/docs)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-27 | Initial admin dashboard planning document |

---

**Last Updated**: April 27, 2026  
**Status**: Planning Phase  
**Next Review**: When Phase 1 (Firebase setup) is complete
