function taskViewHandle(taskId){
    const listOfBlocks = document.querySelectorAll('.container-item_text');
    const listOfButtons = document.querySelectorAll('.item-btn');
    const titleItems = document.querySelectorAll('.container-item_title');

    listOfButtons[taskId].classList.toggle("active");


    const displayValue = listOfBlocks[taskId].style.display;
    console.log(displayValue)
    if (displayValue === 'block'){
        listOfBlocks[taskId].style.display = 'none';
        titleItems[taskId].style.color = 'black';
    }
    else {
        listOfBlocks[taskId].style.display = 'block';
        titleItems[taskId].style.color = '#02818A';
    }
}