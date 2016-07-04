/**
 * Created by hevbevt on 16-7-1.
 */
module.exports = {
    cookieSecret: '把你的cookie密钥放在这里',
};

app.use(require('cookie-parser')(credentials.cookieSecret));

res.cookie('monster', 'nom nom');
res.cookie('signed_monster', 'nom nom', { signed: true });

var monster = req.cookies.monster;
var signedMonster = req.signedCookies.monster;
