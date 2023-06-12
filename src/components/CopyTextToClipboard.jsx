import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import { Button } from 'design-react-kit';

const useStyles = createUseStyles({
  btnPrimary: {
    '&:hover': {
      backgroundColor: 'transparent !important',
      color: '#084d91',
      boxShadow: 'inset 0 0 0 1px #084d91',
    },
  },
});
function ClipboardCopy({ copyText }) {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      <Button className={`btn-outline-primary ${classes.btnPrimary}`} size="xs" icon onClick={handleCopyClick}>
        <span>{isCopied ? 'Copiato!' : 'Copia Link'}</span>
      </Button>
    </div>
  );
}

export default ClipboardCopy;
ClipboardCopy.propTypes = {
  copyText: PropTypes.string,
  setQuestions: PropTypes.func,
};
