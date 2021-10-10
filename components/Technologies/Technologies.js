import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, TechnologySectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <TechnologySectionTitle>Technologies</TechnologySectionTitle>
    <SectionText>
      I've worked with a variety of technologies specializing in the backend, setting up databases, and creating API's.
      I look forward to expanding my knowledge in frontend engineering as well, eventually becoming a full stack engineer.
    </SectionText>
    <List>
    <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, PHP, C/C++, & Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React Native, & React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Data science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Scikit-learn, NumPy, & Pandas
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
