import React from 'react';

interface TextBlockItem {
  imageSrc: string;
  heading: string;
  paragraph: string;
}

interface TextBlockProps {
  textBlocks: TextBlockItem[];
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '10px 0',
  padding: '0 20px',
};

const imageStyle: React.CSSProperties = {
  flex: '0 0 auto',
  width: '50%',
  height: 'auto',
  margin: '0 20px',
  paddingLeft: '12%',
  paddingRight: '1%',
};

const imageStyle2: React.CSSProperties = {
  flex: '0 0 auto',
  width: '50%',
  height: 'auto',
  margin: '0 20px',
  paddingLeft: '1%',
  paddingRight: '16%',
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const headingStyle: React.CSSProperties = {
  fontSize: '29px',
  fontWeight: 520,
  padding: '8px 20px 8px 2.5%',
  wordWrap: 'break-word',
};

const headingStyle2: React.CSSProperties = {
  fontSize: '29px',
  fontWeight: 520,
  padding: '8px 6% 8px 33%',
  wordWrap: 'break-word',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '14px',
  padding: '8px 36% 48px 20px',
  color: 'gray',
  wordWrap: 'break-word',
};

const paragraphStyle2: React.CSSProperties = {
  fontSize: '14px',
  padding: '8px 6% 8px 33%',
  color: 'gray',
  wordWrap: 'break-word',
};

// Media query to handle responsiveness
const mediaQueryStyles = `
  @media (max-width: 1200px) {
    .heading, .paragraph, .heading2, .paragraph2 {
      padding: 0 80px !important;
    }
    .image1, .image2 {
      padding: 0 100px !important;
    }
  }

  @media (max-width: 900px) {
    .heading, .paragraph, .heading2, .paragraph2 {
      padding: 0 40px !important;
    }
    .image1, .image2 {
      padding: 0 40px !important;
    }
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column !important;
      text-align: center; /* Center aligning content */
    }
       @media (max-width: 677px) {
   .heading1 {
   padding-left: 30%}
    }
    .image1, .image2 {
      width: 300px !important;
      height: auto !important;
      margin: 10px auto !important;
      padding: 0 !important;
    }
    .text-container {
      padding: 0 20px !important;
    }
    .heading, .heading2 {
      text-align: center; /* Center aligning headings */
    }
    .paragraph, .paragraph2 {
      text-align: center; /* Center aligning paragraphs */
    }
  }
`;

const TextBlock: React.FC<TextBlockProps> = ({ textBlocks }) => {
  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyles}</style>
      {textBlocks.map((block, index) => (
        <div key={index} style={rowStyle} className="row">
          {index % 2 === 0 ? (
            <>
              <img src={block.imageSrc} alt={`Image ${index + 1}`} style={imageStyle} className="image1" />
              <div style={textContainerStyle} className="text-container">
                <span style={headingStyle} className="heading">{block.heading}</span><br />
                <span style={paragraphStyle} className="paragraph">{block.paragraph}</span>
              </div>
            </>
          ) : (
            <>
              <div style={textContainerStyle} className="text-container">
                <span style={headingStyle2} className="heading2">{block.heading}</span><br />
                <span style={paragraphStyle2} className="paragraph2">{block.paragraph}</span>
              </div>
              <img src={block.imageSrc} alt={`Image ${index + 1}`} style={imageStyle2} className="image2" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TextBlock;
