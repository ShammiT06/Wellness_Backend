import express from "express"
import Journals from "../../models/Journal"

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        const { heading, description, emotions } = req.body
        if (!heading || !description || !emotions) {
            return res.status(400).json("All fields are required")
        }

        let score = 0
        switch (emotions) {
            case "Happy":
                score = 100
                break
            case "Normal":
                score = 80
                break
            case "Unhappy":
                score = 60
                break
            case "Angry":
                score = 40
                break
            case "Sad":
                score = 20
                break
        }

        const journal = new Journals({ heading, description, emotions, score })
        await journal.save()


        res.status(200).json({ message: "Journal Saved Successfully" })

    }
    catch (error) {
        console.error("There is an error", error)
        res.status(404).json({ message: "Something Went Wrong" })
    }
})