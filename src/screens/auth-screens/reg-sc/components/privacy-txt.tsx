import { AText } from 'components';
import React from 'react';

export const PrivacyTxt = () => {
  return (
    <>
      <AText
        style={{ color: '#272727', textAlign: 'left' }}
        children="Marefa Digital DMCC respects your privacy and is committed to protecting your Personal Data. This Privacy Policy will inform you as to how we look after your Personal Data when you visit our Platform and use our Services (regardless of where you visit it from) and will tell you about your privacy rights. Please use the definitions below to understand the meaning of some of the terms used in this Privacy Policy. Unless specifically defined, terms used throughout this Privacy Policy have the same definitions as those given in the Edactik’s General Terms and Conditions. Please read this Privacy Policy carefully before using the Platform or submitting any information to us. "
        type={'bold'}
        isTouchable={false}
        fz={13}
      />

      <AText
        style={{ color: '#272727', textAlign: 'left', paddingTop: 10 }}
        children="By visiting our Platform and using our Services, you shall be deemed to have read, understood and agreed to be bound by this Privacy Policy."
        type={'bold'}
        isTouchable={false}
        fz={13}
      />

      <AText
        style={{ color: '#272727', textAlign: 'left', paddingTop: 10 }}
        children="If you do not agree to any part of this Privacy Policy, you shall immediately cease from accessing Edactik’s Platform or using any of our Services. "
        // children="By visiting our Platform and using our Services, you shall be deemed to have read, understood and agreed to be bound by this Privacy Policy."
        type={'bold'}
        isTouchable={false}
        fz={13}
      />
      <AText
        style={{ color: '#272727', textAlign: 'left', paddingTop: 10 }}
        children="Definitions:"
        type={'bold'}
        isTouchable={false}
        fz={13}
      />
      <AText
        type={'bold'}
        isTouchable={false}
        fz={13}
        style={{ color: '#272727', textAlign: 'left', paddingTop: 10 }}
        children="“Applicable Law” means all the laws, rules, regulations, notifications, guidelines, ministerial decisions or cabinet resolutions in force and effect, as of the date hereof and which may be promulgated or brought into force and effect hereinafter in the United Arab Emirates as applicable in the emirate of Dubai, including judgments, decrees, injunctions, or orders of any court of record, as may be in force and effect during the subsistence of this Privacy Policy.
      “Comply with a Legal or Regulatory Obligation” means processing your Personal Data where it is necessary for compliance with a legal or regulatory obligation that we are subject to in accordance with the Applicable Law.
      “Data” means personal and non-personal User’s data that is submitted, generated, featured and displayed through the Platform, collected from the use of the Services and stored on Edactik’s servers.
      “Edactik”, “Marefa”, “we” and “us” collectively mean Marefa Digital DMCC, as well as our affiliates and subsidiaries."
      />
    </>
  );
};
