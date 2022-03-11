'use strict';

{
    const date = new Date();
    const year = date.getFullYear();
    // monthのみ０から始まる
    const month = date.getMonth() + 1;
    const today = date.getDate();
    // 今月の最初の日
    const firstDate = new Date(year, month - 1, 1);
    // 最初の曜日
    const firstDay = firstDate.getDay();
    // 今月の最後の日（来月の最初の日の1日前）
    const lastDate = new Date(year, month, 0);
    const lastDayCount = lastDate.getDate();
    
    let dayCount = 1;
    let createHtml = '';
    createHtml = '<p>' + year + '年 ' + month + '月' + today + '日' + '</p>'

    createHtml += '<table>' + '<tr>';

    const weeks = ['日','月','火','水','木','金','土'];
    for (let i = 0; i < weeks.length; i++) {
        if (i == 0) {
            createHtml += '<td class="red">' + weeks[i] + '</td>';    
        } else if (i == 6) {
            createHtml += '<td class="blue">' + weeks[i] + '</td>';
        } else {
            createHtml += '<td>' + weeks[i] + '</td>';
        }
    }
    createHtml += '</tr>';

    // カレンダーの行を６行作成
    for (let n = 0; n < 6; n++) {
        createHtml += '<tr>';
        // カレンダーの列を７列作成
        for (let d = 0; d < 7; d++) {
            // １回目のループで1日の曜日まで空のテーブルを作成
            // 月の最終日(31とか)をdayCountが超えたら空のテーブルを作成
            // 他は日にちを割り当てる
            if (n == 0 && d < firstDay) {
                createHtml += '<td></td>';
            } else if (dayCount > lastDayCount) {
                createHtml += '<td></td>';
            } else {
                if (dayCount == today) {
                    createHtml += '<td class="today">' + dayCount + '</td>';
                } else if (d == 0) {
                    createHtml += '<td class="red">' + dayCount + '</td>';
                } else if (d == 6) {
                    createHtml += '<td class="blue">' + dayCount + '</td>';
                } else {
                    createHtml += '<td>' + dayCount + '</td>';
                }
                dayCount++;
            }
        }
    
        createHtml += '</tr>';
    }

    createHtml += '</table>';
    // 作っておいた divタグ内部に createHtml を追加
    document.querySelector('#calendar').innerHTML = createHtml;
}