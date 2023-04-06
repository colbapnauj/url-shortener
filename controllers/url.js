
import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import { validateUrl } from '../utils/utils.js';

const getUrls = async (req, res) => {
    try {
        const urls = await Url.find({});
        if (urls) {
            res.send(urls)
        } else {
            res.status(404).json('No URL found');
        }
        console.log(req.headers.host);
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
}

const getUrl =  async(req, res) => {
    try {
        const { id } = req.params;
        const response = await Url.findOne({_id: id});
        if (response) {
            res.send(response)
        } else {    
            res.status(404).json('No URL found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
}

const createUrl = async (req, res) => {
    const { origUrl } = req.body;
    const base = req.headers.host;

    const urlId = nanoid(7);
    if (validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                url = new Url({
                    origUrl,
                    urlId,
                    date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original URL');
    }
}

const deleteUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Url.deleteOne({_id: id});
        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
}

export {
    getUrl, getUrls, createUrl, deleteUrl, 
}