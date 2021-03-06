import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import TimeBlock from '../../components/TimeBlock';

const Education = () => {
  return (
    <ContentBlock backgroundColor="#EEEEEE" color="#E57373" title="Education">
      <TimeBlock
        place="Ohio State University"
        duration="Sept 2009 - Dec 2013"
        title="Computer Science & Engineering"
      />
    </ContentBlock>
  );
};

export default Education;
