import convertKeysToLowercase from "../../util/convertKeysToLowercase.js";

export default async function createTransaction(_, { input }, context) {
  const convertedInput = await convertKeysToLowercase(input);
  const date = new Date();
  convertedInput.createdAt = date;
  const transactionResponse = await context.mutations.createTransaction(
    context,
    convertedInput
  );
  return transactionResponse;
}
