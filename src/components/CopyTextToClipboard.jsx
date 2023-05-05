import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'design-react-kit';

function ClipboardCopy({ copyText }) {
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
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button color="success" size="xs" icon onClick={handleCopyClick}>
      <span className="rounded-icon">
        <Icon color="success" icon="it-copy" />
      </span>
      <span>{isCopied ? 'Copiato!' : 'Copia Link'}</span>
    </Button>
  );
}

export default ClipboardCopy;
ClipboardCopy.propTypes = {
  copyText: PropTypes.string,
  setQuestions: PropTypes.func,
};
