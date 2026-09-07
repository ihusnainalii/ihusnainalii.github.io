document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('downloadResume');
    var modal = document.getElementById('resume-modal');
    if (!modal) return;

    var lastFocus = null;

    function open(e) {
        if (e) e.preventDefault();
        lastFocus = document.activeElement;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        var firstBtn = modal.querySelector('.resume-option-btn');
        if (firstBtn) firstBtn.focus();
    }

    function close() {
        modal.hidden = true;
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    // expose so other UI (e.g. the CLI terminal) can trigger it
    window.openResumeModal = open;

    if (trigger) trigger.addEventListener('click', open);

    modal.addEventListener('click', function (e) {
        if (e.target.hasAttribute('data-resume-close')) close();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) close();
    });
});
