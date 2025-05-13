// this intialize the variable to access the element in the html file
// and add the event listener to the button sidebar and close button
let buttonSideBar = document.getElementById('sidebarToggle');
let closeSideBar = document.getElementById('closeSettings');
let settings = document.getElementById('settings');
let projectSettings = document.getElementById('project_settings');
let content_page = document.getElementById('content-page');
let img_user = document.getElementById('img_user');
let logout = document.getElementById('logout');
let fill = document.getElementById('fill');
let designated_time = document.getElementById('designated_time');
let remaining_time = document.getElementById('remaining_time');
let card = document.querySelectorAll('.card-task');

// show the sidebar when clicked on the button sidebar and hide the content page
buttonSideBar.addEventListener('click', function () {
    settings.classList.add('show');
    projectSettings.classList.add('show');
    content_page.classList.add('hide-section');
    closeSideBar.classList.add('show');
});
// hide the sidebar when clicked on the close button and show the content page
closeSideBar.addEventListener('click', function () {
    settings.classList.remove('show');
    projectSettings.classList.remove('show');
    content_page.classList.remove('hide-section');
    closeSideBar.classList.remove('show');
});

// toggle the logout button when clicked on the user image
img_user.addEventListener('click', function(){
    logout.classList.toggle('show');
});

// go to the login page when clicked on the logout button and hide the logout button
logout.addEventListener('click', function(){
    const confirmed = confirm('Are you sure you want to logout?'); // store the result of the confirm dialog
    if(confirmed){ // check if the user clicked on ok
        window.location.href = 'index.html'; // redirect to the login page
    }else{ // check if the user clicked on cancel
        logout.classList.remove('show'); // hide the logout button
    }
});

// display the time and calculate the start time and remaining time and precentage
window.addEventListener('DOMContentLoaded', function() {
    const startTime = new Date('05-10-2025 00:00:00');
    const endTime = new Date(startTime);
    endTime.setDate(startTime.getDate() + 30);
    const now = new Date();
    const totalDuration = endTime - startTime;
    const elapsed = now - startTime;
    const remaining = endTime - now;
    const totalDays = Math.ceil(totalDuration / (1000 * 60 * 60 * 24));
    const remainingDays = Math.max(0,  Math.ceil(remaining / (1000 * 60 * 60 * 24)) - 1);
    const precent = Math.min(100, (elapsed / totalDuration) * 100);
    fill.style.width = precent + '%';
    designated_time.innerHTML = totalDays + 'days';
    remaining_time.innerHTML = remainingDays + 'days';
});

// display the modal when clicked on the card and show the task details
document.addEventListener('DOMContentLoaded', function(){
    card.forEach(task => {
        task.addEventListener('click', function() {
            // intialize the variable to access the element in the modal
            let name_task = document.querySelector('.modal-body .name-task p');
            let desc_task = document.querySelector('.modal-body .task_description p');
            let assignee_task = document.querySelector('.modal-body .assign_to_him small');
            let signs = document.querySelector('.modal-body .signs strong mark');
            let status_task = document.querySelector('.modal-body #status');
            let comments = document.querySelector('#comments');

            // get the data attributes from the card
            const title = task.getAttribute('data-title');
            const description = task.getAttribute('data-description');
            const assignee = task.getAttribute('data-assignee');
            const priority = task.getAttribute('data-priority');
            const status = task.getAttribute('data-status');
            const comment = task.getAttribute('data-comments');

            // set the data attributes to the modal
            name_task.textContent = title;
            desc_task.textContent = description;
            assignee_task.textContent = assignee;
            signs.textContent = priority;
            status_task.value = status;
            comments.textContent = comment;
            // change the background color of the signs based on the priority
            if(priority == 'High Priority'){
                signs.style.backgroundColor = '#ef4444';
            } else if (priority == 'Urgent'){
                signs.style.backgroundColor = '#f59e0b';
            }else{
                signs.style.backgroundColor = '#a855f7';
            }
        });
    });
});


// now I'm add comment to array and store this comment using local storage and when clock on viewComment button go to new modal

let comments = document.getElementById('comments');
let sendCommentBtn = document.getElementById('send-comment');
let viewCommentBtn = document.getElementById('viewComment_btn');
let comment_modal = document.getElementById('commentsModal');
