import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Hero = ({
  bgColor = '',
  xPadding = true,
  className,
  yPaddingXLScreen = true,
  Tag = 'div',
  ariaLabelledBy,
  children,
}) => {
  const heroClasses = classNames(
    'py-5',
    {
      'bg-primary': bgColor === 'primary',
      'lightgrey-bg-a2': bgColor === 'light',
    },
    className
  );
  const containerClass = classNames('container', {
    'py-3': yPaddingXLScreen,
    'px-3': xPadding,
  });
  return (
    <div className={heroClasses}>
      <Tag className={containerClass} aria-labelledby={ariaLabelledBy}>
        {children}
      </Tag>
    </div>
  );
};

Hero.propTypes = {
  bgColor: PropTypes.oneOf(['primary', 'light']),
  xPadding: PropTypes.bool,
  yPaddingXLScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  Tag: PropTypes.string,
};
