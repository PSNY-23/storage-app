"use server";

import { Query, ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";

const getUserByEmail = async (email: string) => {
  const { database } = await createAdminClient();
  const result = await database.listDocuments(appwriteConfig.databaseId, appwriteConfig.usersCollectionId, [
    Query.equal("email", email),
  ]);
  return result.total > 0 ? result.documents[0] : null;
};
const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({ fullName, email }: { fullName: string; email: string }) => {
  const existingUser = await getUserByEmail(email);
  const accountId = await sendEmailOTP({ email });
  if (!accountId) throw new Error("Failed to send and OTP");
  if (!existingUser) {
    const { database } = await createAdminClient();
    await database.createDocument(appwriteConfig.databaseId, appwriteConfig.usersCollectionId, ID.unique(), {
      fullName,
      email,
      avatar: "https://i.pinimg.com/1200x/1b/2e/31/1b2e314e767a957a44ed8f992c6d9098.jpg",
      accountId,
    });
  }
  return parseStringify({ accountId });
};
