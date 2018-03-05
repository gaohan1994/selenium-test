const {Builder, By, Key, until} = require('selenium-webdriver');

/**
 * demo 1 简单测试
 * 
 */
async function example1() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.taobao.com/');
        let search_box = await driver.findElement(By.id('q'));
        await search_box.sendKeys('book');
        await driver.findElement(By.css("button[type='submit']")).click();
        await driver.sleep(1000);
    } finally {
        await driver.quit();
    }
}

/**
 * demo 2 测试是否可以转换iframe
 * 
 */
async function example2 () {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://music.163.com/#/user/home?id=49642138');
        await driver.switchTo().frame(0); 
        await driver.findElement(By.css("a[data-action='send']")).click();  
        await driver.sleep(1000);  
    } finally {
        await driver.quit();
    }
}

/**
 * demo 3 测试完成一次私信操作
 * 
 */
async function example3 () {
    /*
        http://music.163.com/#/user/home?id=6228671 李荣浩
        http://music.163.com/#/user/home?id=49642138 三无
        http://music.163.com/#/user/home?id=29879272 张惠妹
    */
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://music.163.com/#/user/home?id=29879272');
        
        await driver.findElement(By.css('a[data-action="login"]')).click();
        await driver.findElement(By.className('u-btn2-2')).click();
        await driver.findElement(By.css('input[placeholder="请输入手机号"]')).sendKeys('18259020894');
        await driver.findElement(By.css('input[placeholder="请输入密码"]')).sendKeys('1471497214');
        await driver.findElement(By.className('j-primary u-btn2 u-btn2-2')).click();

        await driver.switchTo().frame(0); 
        await driver.sleep(3000);
        await driver.findElement(By.css("a[data-action='send']")).click();
        await driver.sleep(500);
        await driver.findElement(By.className('u-txt area j-flag')).sendKeys('张惠妹真棒！非常喜欢你的歌');
        await driver.sleep(500);
        
        // await driver.findElement(By.className('f-fr u-btn u-btn-1 j-flag')).click();
    } finally {
        await driver.quit();
    }
}

// example1();
// example2();
// example3();