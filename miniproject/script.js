document.addEventListener('DOMContentLoaded', function() {
    const hoverImageContainer = document.querySelector('.hover-image-container');
    const hoverImage = document.querySelector('.hover-image');
    const hoverBox = document.querySelector('.hover-box');
    
    hoverImageContainer.addEventListener('mouseover', function() {
        // hover-box 보이기
        hoverBox.style.opacity = '1';
        
        // hover-image 숨기기
        hoverImage.style.visibility = 'hidden';
    });

    hoverImageContainer.addEventListener('mouseout', function() {
        // hover-box 숨기기
        hoverBox.style.opacity = '0';
        
        // hover-image 보이게 하기
        hoverImage.style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let isScrollingDown = false; // 스크롤 방향을 감지하는 변수
    let hasScrolled = false; // 스크롤 여부를 확인하기 위한 변수

    // 스크롤 이벤트를 감지
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            // 스크롤 방향을 감지하기 위한 변수
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > window.innerHeight / 2) {
                // 사용자가 아래로 스크롤한 경우
                if (!isScrollingDown) {
                    isScrollingDown = true;
                    window.scrollTo({
                        top: document.querySelector('.section1').offsetTop, // 섹션1의 상단으로 이동
                        behavior: 'smooth' // 부드러운 스크롤 효과
                    });
                }
            } else {
                // 사용자가 위로 스크롤한 경우
                if (isScrollingDown) {
                    isScrollingDown = false;
                    window.scrollTo({
                        top: document.querySelector('.header').offsetTop, // 헤더의 상단으로 이동
                        behavior: 'smooth' // 부드러운 스크롤 효과
                    });
                }
            }
            hasScrolled = true; // 스크롤 이벤트 발생 여부를 변경
        }
    });
});
