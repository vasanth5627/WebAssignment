const searchInput = document.getElementById('search_input');
const emojiLists = document.getElementById('emoji_list');




init();
function init(){
   renderEmojis();
   searchInput.addEventListener('keyup',renderEmojis);
}

function renderEmojis() {
    let copyEmojiListData = [...emojiList];
    let html = '';
    copyEmojiListData =  copyEmojiListData.filter((emoji) => {
        let flag = false;
        for(let i = 0; i < emoji.tags.length; i++){
            if(emoji.tags[i].toLowerCase().includes(searchInput.value)){
                flag = true;
                break;
            }
        }
        return flag;
    })
    for(let i=0; i<copyEmojiListData.length; i++) {
        html += `<div class="emoji_row">
        <hr>
        <span class="emoji">${copyEmojiListData[i].emoji}</span>
        <span class="emoji_name">${copyEmojiListData[i].aliases[0]}</span>
        <span class="emoji_description">${copyEmojiListData[i].description}</span>
        <hr>
    </div>`;
    }
    emojiLists.innerHTML = html;

}