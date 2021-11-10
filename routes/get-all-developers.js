const express = require('express');
const router = express.Router();
const axios = require('axios');

const numOfRepos = 5;
let response = [];

let repos = [];

router.delete('/:id', (req, res, next) => {
    response = response.filter(repo => repo.id !== req.params.id);

    res.status(204);
    res.send({
        message: 'Repo deleted'
    });
})

router.get('/:id', (req, res, next) => {
    const user = response.find(user => user.id === req.params.id);
    if (user) {
        res.status(200).json(
            user
        );
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
})

router.get('/', (req, res, next) => {
    res.status(200).json(response.map(data => {
        return {
            id: data.id,
            avatar_url: data.avatar_url
        }
    }))
})
router.post('/', async (req, res, next) => {

    const uName = req.body.github_id;
    let reposUrl;
    const user = response.filter(user => user.id === uName);
    if (user.length != 0) {

        return res.status(200).json({ id: user[0].id, avatar_url: user[0].avatar_url });

    } else {


        try {
            const { data } = await axios(`https://api.github.com/users/${uName}`);
            reposUrl = data.repos_url;

            const {
                login: id,
                avatar_url,
                name,
                company,
                blog,
                location,
                email,
                bio,
            } = data;


            response.push({
                id,
                avatar_url,
                name,
                company,
                blog,
                location,
                email,
                bio,
                github_id: req.body.github_id,
                linkedin_id: req.body.linkedin_id,
                codechef_id: req.body.codechef_id,
                hackerrank_id: req.body.hackerrank_id,
                twitter_id: req.body.twitter_id,
                medium_id: req.body.medium_id
            });
        } catch (err) {
            next(err);
        }

        try {
            const { data } = await axios(reposUrl + '?sort=created');
            if (data.length === 0) {
                return res.status(201).json({ id: response[response.length - 1].id });
            }
            let login;
            repos = await data
                .map(repo => {
                    login = repo.owner.login;
                    return { name: repo.name, html_url: repo.html_url, description: repo.description, updated_at: repo.updated_at };
                })

            const index = response.findIndex(data => login === data.id);
            if (repos || repos.length !== 0)
                response[index].repos = repos;
            res.status(201).json({ id: response[response.length - 1].id, avatar_url: response[response.length - 1].avatar_url });

        } catch (err) {
            next(err);
        }
    }

    // return res.status(201).json({ id: response[response.length - 1]["id"] });
    // res.locals.reposUrl = reposUrl;
    // next();
    // res.json(response);

})
// router.post('/', async (req, res, next) => {
//     // try {
//     //     const { data } = await axios(res.locals.reposUrl + '?sort=created');
//     //     if (data.length === 0) {
//     //         return res.json(response);
//     //     }
//     //     let login;
//     //     repos = await data
//     //         .slice(0, numOfRepos)
//     //         .map(repo => {
//     //             login = repo.owner.login;
//     //             return { name: repo.name, html_url: repo.html_url, description: repo.description, updated_at: repo.updated_at };
//     //         })

//     //     const index = response.findIndex(data => login === data.id);
//     //     if (repos || repos.length !== 0)
//     //         response[index].repos = repos;
//     //     res.status(201).json({ id: response[response.length - 1]["id"] });

//     // } catch (err) {
//     //     res.status(404).json({ message: "No repos found" });
//     // }
// })




module.exports = router;