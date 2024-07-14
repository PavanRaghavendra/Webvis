const express = require('express');
const platfrom = require('../Model/platfrom');
const router = express.Router();
router.use(express.json());
router.get('/platfrom', async (req, res) => {
    const newname = req.query.newname; // Note: This should probably be req.params.platfromname
    try {
        const plat = await platfrom.find({ 'platname': newname });
        console.log(plat);
        if (plat.length > 0) {
            return res.status(200).json({ data: plat });
        }
        return res.status(404).json({ msg: "Platform not found" });
    } catch (err) {
        console.error('Error in GET /platfrom:', err);
        return res.status(500).json({ msg: err.message });
    }
});

router.post('/data', async (req, res) => {
    const {platname,name,Bio,followers,following,post,Reached,engaged,Content,Ads,promotions,stories,
        follows,posts,saves,comments,shares
    } = req.body;
    try {
        const newPlatform = await platfrom.create({
            platname:platname,
            name:name,
            Bio:Bio,
            followers:followers,
            following:following,
            post:post,
            Reached:Reached,
            engaged:engaged,
            Content:Content,
            Ads:Ads,
            promotions:promotions,
            stories:stories,
            follows:follows,
            posts:posts,
            saves:saves,
            comments:comments,
            shares:shares
        });
        return res.status(201).json({
            msg: 'Created successfully',
            data: newPlatform
        });
    } catch (err) {
        console.error('Error in POST /data:', err);
        return res.status(500).json({ msg: err.message });
    }
});

module.exports = router;