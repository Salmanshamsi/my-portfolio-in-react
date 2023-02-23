import React from 'react'
import styled from 'styled-components';
import Item from './item/Item';


const Timeline = () => {
  return (
    <div>
        <TimelineStyled>
            <div className="education-timeline timeline">
                <Item
                    duration={'2023'}
                    title={'BS Computer Science'}
                    desc={'I am studying computer science from PAF kiet.'}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                />
                <Item
                    duration={'2022 - 2023'}
                    title={'web & App development Course'}
                    desc={'Im completed a web&App development diploma from saylani mass IT training.'}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                />
            </div>
            <div className="jobs-timeline timeline">
                <Item
                    duration={'2022 - 2023'}
                    title={'student Intern'}
                    desc={'im working as a student Intern in saylani mass IT traning.'}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                />
            </div>
        </TimelineStyled>
    </div>
  )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline