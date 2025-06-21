document.addEventListener('DOMContentLoaded', function() {
    
    var downloadResume = document.getElementById('downloadResume');

    downloadResume.addEventListener('click', function() {
        var pdfPath = 'resume/Husnain Ali - Principal software Engineer.pdf';
        window.open(pdfPath, '_blank');
    });
});