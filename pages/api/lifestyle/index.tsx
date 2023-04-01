import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export const getLife = async() => {
    const mongoClient = await clientPromise;
    const data = await mongoClient.db('data').collection('lifestyle').find().toArray();
    return JSON.parse(JSON.stringify(data))
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await getLife();
    res.status(200).json({life: data})
}