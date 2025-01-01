import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function StyledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        backgroundColor: '#001d1d',
        color: '#00e6e6',
        padding: '20px',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginBottom: '20px',
          textAlign: 'left',
          color: '#00e6e6',
          letterSpacing: '0.5px',
        }}
      >
        Q & A
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          marginBottom: '0px',
          textAlign: 'left',
          color: '#fff',
          letterSpacing: '0.3px',
        }}
      >
        EveryX
      </Typography>
      <div style={{ maxWidth: '600px', margin: '10px auto 0' }}>
        {[{
          question: 'Q: What is EveryX?',
          answer: 'EveryX is a prediction market platform that allows users to forecast real-world events and trade based on those predictions.',
        },
        {
          question: 'Q: How does EveryX work?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          question: 'Q: What fees are associated with EveryX?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          question: 'Q: What types of events can I predict on EveryX?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          question: 'Q: How do I start using EveryX?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          question: 'Q: Can I trade my predictions?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }].map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            style={{ backgroundColor: '#001d1d', color: '#fff' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
              style={{
                borderTop: index === 0 ? 'none' : '1px solid grey',
              }}
            >
              <Typography
                style={{
                  fontSize: '0.9rem',
                  color: '#fff',
                  letterSpacing: '0.8px',
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#d3d3d3',
                  letterSpacing: '0.5px',
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      {/* Responsive image container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: '40px',
        }}
      >
        <img
          src="./viewmore.svg"
          alt="Placeholder 1"
          style={{
            width: '60px',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
        
    
      </div>
      <div className="bg-[#001d1d] text-white p-6 mt-12 text-xs">
      {/* Header Links and Logo */}
      <div className="mb-6 flex justify-between items-center">
        <ul className="space-y-2">
          <li className="font-medium cursor-pointer">Common Q&A</li>
          <li className="font-medium cursor-pointer">Contact</li>
          <li className="font-medium cursor-pointer">Customer Support</li>
        </ul>
        {/* Logo */}
        <img src="./logo.svg" alt="EveryX Logo" className="w-12 h-auto" />
      </div>

      {/* Badge */}
      <div className="flex flex-col items-center space-y-4 mb-6">
        <img src="./badge.svg" alt="Verified Badge" className="w-20 h-auto" />
      </div>

      {/* Description Section */}
      <p className="mb-6 leading-4">
        EveryX is owned and operated by ABC Concepts B.V., the only platform where you can engage in event gambling with real money leveraging. ABC Concepts B.V. is registered with the XYZ Agency under Article 2 of the Financial Authority's regulations for operating ZYX business.
      </p>
      <p className="mb-6">
        Our official registration number is BVO123456789A.
      </p>

      {/* Footer */}
      <div className="text-left mb-10">
        <p>©2024 All rights reserved. Unauthorized reproduction or redistribution is prohibited.</p>
      </div>
      
      {/* Footer Image */}
      <div className="flex justify-center">
        <img src="./copyright.svg" alt="Footer Logo" className="w-20 h-auto" />
      </div>
    </div>
    </div>
  );
}
