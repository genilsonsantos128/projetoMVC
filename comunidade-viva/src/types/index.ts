import { 
  User, 
  PrayerRequest, 
  PrayerResponse, 
  Forum, 
  ForumPost, 
  ForumComment, 
  Group, 
  GroupMember, 
  Notification,
  Role,
  PrayerStatus,
  PrayerCategory,
  PrayerResponseType,
  GroupRole,
  MembershipStatus,
  NotificationType
} from '@prisma/client'

// Extended types with relations
export type UserWithRelations = User & {
  prayerRequests: PrayerRequest[]
  prayerResponses: PrayerResponse[]
  groupMemberships: (GroupMember & { group: Group })[]
  _count?: {
    prayerRequests: number
    prayerResponses: number
    groupMemberships: number
  }
}

export type PrayerRequestWithRelations = PrayerRequest & {
  user: User
  responses: (PrayerResponse & { user: User })[]
  _count?: {
    responses: number
  }
}

export type ForumWithPosts = Forum & {
  posts: (ForumPost & { 
    user: User
    _count: { comments: number }
  })[]
  _count?: {
    posts: number
  }
}

export type ForumPostWithRelations = ForumPost & {
  user: User
  forum: Forum
  comments: (ForumComment & { user: User })[]
  _count?: {
    comments: number
  }
}

export type GroupWithMembers = Group & {
  owner: User
  members: (GroupMember & { user: User })[]
  _count?: {
    members: number
  }
}

// Form types
export interface CreatePrayerRequestData {
  title: string
  content: string
  category: PrayerCategory
  isAnonymous?: boolean
  isUrgent?: boolean
}

export interface CreateForumPostData {
  title: string
  content: string
  forumId: string
}

export interface CreateGroupData {
  name: string
  description: string
  isPrivate?: boolean
  maxMembers?: number
}

export interface UpdateUserProfileData {
  name?: string
  bio?: string
  ministry?: string
  phone?: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Auth types
export interface SessionUser {
  id: string
  email: string
  name: string
  role: Role
  avatar?: string
}

// Statistics types
export interface CommunityStats {
  totalMembers: number
  activePrayerRequests: number
  totalGroups: number
  recentActivity: number
}

// Export Prisma types
export {
  User,
  PrayerRequest,
  PrayerResponse,
  Forum,
  ForumPost,
  ForumComment,
  Group,
  GroupMember,
  Notification,
  Role,
  PrayerStatus,
  PrayerCategory,
  PrayerResponseType,
  GroupRole,
  MembershipStatus,
  NotificationType
}