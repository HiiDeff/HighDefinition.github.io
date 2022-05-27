# FTC #18225 High Definition Team Website

Welcome to our team! My name is Eesha and this README should walk you through everything you need to know to edit our website. Please read this entirely so that you know how to edit and make updates to our website properly.

This website is coded via Next using npm.

## Code Organization
```python
v components
    > award.js //award component: season page
    > banner.js //banner - notice to user
    > collapse.js //dropdown collapse component
    > fadeinsection.js //make section fade in on scroll
    > footer.js //website footer
    > header.js // page header
    > navbar.js //navigation bar
    > title.js //section title
    > top.js //head customized to page
v pages
    v guides
        > ftc-programming-guide.js //programming guide page
        > ftc-robot-guide.js //robot guide page
    > _app.js //import scss files into pages
    > _document.js //declares page template (head & body)
    > _error.js //error page
    > about.js //about page
    > contact.js //contact page
    > events.js //events page
    > index.js //home page
    > resources.js //resources page
    > seasons.js //seasons page
v public
    > documents //pdfs available on website
    > images //images for website
    > logo.png //team logo
v scss
    > _vars.scss //variables for important colors
    > pages.scss //styles for specific pages
    > styles.scss //general website styles
```

## Making Changes
You will be making changes on your own branch and then merging it periodically once you have an update. 

**DO NOT DIRECTLY EDIT MAIN!**

Here are the steps to do that:

#### 1. Clone the repository

The most ideal way is to download Github Desktop and use that to clone the repo.

Shell Command:
```
git clone https://github.com/HiiDeff/HighDefinition.github.io
```

#### 2. Create a branch

Name the branch with the following convention: "feature/change you are making"-"your name"

Here is an example on how to do this:
```
git checkout -b addoutreach-eesha
```

#### 3. Push changes to branch
Continue to push your local changes into the branch using the following commands:
```
git add .
git commit -m "description of what you changed"
git push
```

#### 4. Create a pull request
Then, go onto github and create a pull request on your branch. Notify Eesha about your change and after she reviews it, she will go ahead and merge the change!

This just makes sure that no bugs go through to the website.