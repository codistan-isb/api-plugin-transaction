
export default async function createTransaction(context, input) {
    const { Transactions } = context.collections;
    const transactionsResult = await Transactions.insertOne(input);
    if (transactionsResult.ops) {
        return transactionsResult.ops[0];
    }
    else{
        return []
    }
}
