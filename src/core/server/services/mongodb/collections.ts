import { CommentAction } from "coral-server/models/action/comment";
import { CommentModerationAction } from "coral-server/models/action/moderation/comment";
import { Comment } from "coral-server/models/comment";
import { Community } from "coral-server/models/community";
import { createCollection } from "coral-server/models/helpers";
import { Invite } from "coral-server/models/invite";
import { MigrationRecord } from "coral-server/models/migration";
import { PersistedQuery } from "coral-server/models/queries";
import { Site } from "coral-server/models/site";
import { Story } from "coral-server/models/story";
import { Tenant } from "coral-server/models/tenant";
import { User } from "coral-server/models/user";

export const users = createCollection<User>("users");

export const invites = createCollection<Invite>("invites");

export const tenants = createCollection<Tenant>("tenants");

export const comments = createCollection<Comment>("comments");

export const stories = createCollection<Story>("stories");

export const commentActions = createCollection<CommentAction>("commentActions");

export const commentModerationActions = createCollection<
  CommentModerationAction
>("commentModerationActions");

export const queries = createCollection<PersistedQuery>("queries");

export const migrations = createCollection<MigrationRecord>("migrations");

export const communities = createCollection<Community>("communities");

export const sites = createCollection<Site>("sites");

const collections = {
  users,
  invites,
  tenants,
  comments,
  stories,
  commentActions,
  commentModerationActions,
  queries,
  migrations,
  communities,
  sites,
};

export default collections;
