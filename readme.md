#made by Jared Anders Isaksen

### Install plugin

- Downoload repo as a zip file
- Go to your wordpress admin panel > Plugin tab > Add new
- Click "Upload Plugin" in the top left
- Click "Choose File" and select downloade zip file
- Click "Install Now"
- Click "Activate Plugin"
- Go to a post or a page and add gutenberg block 
    - search for it under 'ski resort'

>PS you might get a "Updating failed" message when changing the block in editor, ignore it
>It dose update the block. 
>The error seams to come from a problem with https settings

### Develop plugin

#### clone repo

#### run `npm install`

#### run `npm start`


----------------------------

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).