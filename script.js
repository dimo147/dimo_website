new fullpage('#fullpage', {
    autoScrolling:true,
    sectionsColor: ['#161616', '#4BBFC3', '#7BAABE', '#ffffff', '#000000'],
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
    }
});

AOS.init();