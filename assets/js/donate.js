// donate.js
// Handles card expand/collapse and makes donate images toggle the card


(function () {
    function initCardToggles() {
        const cards = document.querySelectorAll('.flex-grid .card');
        if (!cards.length) return;

        cards.forEach((card) => {
            card.addEventListener('click', (ev) => {
                // don't toggle if the click came from an interactive control
                const clickedTag = ev.target && ev.target.tagName;
                if (clickedTag === 'A' || clickedTag === 'INPUT' || clickedTag === 'BUTTON' || clickedTag === 'SELECT' || clickedTag === 'TEXTAREA' || clickedTag === 'LABEL') return;

                const isExpanded = card.getAttribute('aria-expanded') === 'true';

                cards.forEach((otherCard) => {
                    const detailsId = otherCard.getAttribute('aria-controls');
                    if (!detailsId) return;

                    const detailsEl = document.getElementById(detailsId);

                    if (otherCard === card) {
                        const newState = !isExpanded;
                        otherCard.setAttribute('aria-expanded', newState ? 'true' : 'false');
                        if (detailsEl) detailsEl.hidden = !newState;
                        if (detailsEl && detailsEl.querySelector('iframe')) {
                            if (newState) otherCard.classList.add('expanded-iframe');
                            else otherCard.classList.remove('expanded-iframe');
                        }
                    } else {
                        otherCard.setAttribute('aria-expanded', 'false');
                        if (detailsEl) detailsEl.hidden = true;
                        if (detailsEl && detailsEl.querySelector('iframe')) {
                            otherCard.classList.remove('expanded-iframe');
                        }
                    }
                });
            });
        });
    }

    function initImgToggles() {
        const imgElements = document.querySelectorAll('.card-details .donateImg, .card-details img.donateImg');
        imgElements.forEach(function (img) {
            if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');

            const triggerParentCard = function (el) {
                const card = el.closest('.card');
                const clickable = card.querySelector('.click');
                if (!clickable) return;
                clickable.click();
            };

            img.addEventListener('click', function (ev) {
                ev.preventDefault();
                triggerParentCard(img);
            });

            img.addEventListener('keydown', function (ev) {
                if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
                    ev.preventDefault();
                    triggerParentCard(img);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initCardToggles();
        initImgToggles();
    });
})();
