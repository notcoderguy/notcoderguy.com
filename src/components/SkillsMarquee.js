import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import skills from './../assets/skills.json';

const SkillsMarquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeEl = marqueeRef.current;
        const totalWidth = marqueeEl.scrollWidth;
        const viewportWidth = marqueeEl.offsetWidth;
        const moveDistance = totalWidth - viewportWidth;

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" },
            onRepeat: () => gsap.set(marqueeEl, { x: 0 }) // Reset position at the start of each repeat
        });

        tl.to(marqueeEl, {
            x: -moveDistance,
            duration: 25
        })
            .to(marqueeEl, {
                x: 0,
                duration: 25
            });
    }, []);

    return (
        <div className="whitespace-nowrap" ref={marqueeRef}>
            <div> {/* Inner container */}
                {skills.map((skill, index) => (
                    <span key={index} className="inline-block mx-4">{skill}.</span>
                ))}
            </div>
        </div>
    );
};

export default SkillsMarquee;
