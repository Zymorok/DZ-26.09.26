import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,

  stats: defineTable({
    userId: v.id("users"),
    totalGames: v.number(),
    winsX: v.number(),
    winsO: v.number(),
    draws: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"]),

  gameHistory: defineTable({
    userId: v.id("users"),
    winner: v.union(v.literal("X"), v.literal("O"), v.literal("DRAW")),
    board: v.array(v.union(v.string(), v.null())),
    winnerCombination: v.optional(v.array(v.number())),
    createdAt: v.number(),
  })
    .index("by_creation", ["createdAt"])
    .index("by_user", ["userId"])
    .index("by_user_creation", ["userId", "createdAt"]),
})
