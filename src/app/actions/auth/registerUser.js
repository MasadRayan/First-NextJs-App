"use server";

import { dbConnect } from "@/lib/dbConnect";

const registerUser = async (playload) => {

    try {
        const result = await dbConnect().insertOne(playload);
        return {
            acknowledgement: result.acknowledged,
            insertedID: result.insertedId.toString()
        }
    } catch (error) {
        console.log(error);
        return null
    }
};

export default registerUser;