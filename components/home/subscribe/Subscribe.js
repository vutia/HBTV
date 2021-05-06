import * as styled from './styles';

import { useState } from 'react';

export default function Subscribe() {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <styled.Subscribe>
      <styled.Title>
        Ready to watch Nextflix? Enter your email or use{' '}
        <span>trial account</span> to start today!
      </styled.Title>
      <styled.Wrapper>
        <styled.InputField>
          <styled.Input
            type="email"
            id="email"
            autoComplete="email"
            minLength="5"
            required
            value={inputValue}
            onChange={onInputChange}
          />
          <styled.Label htmlFor="email">Email address</styled.Label>
          <styled.Error>{null}</styled.Error>
        </styled.InputField>
        <styled.SubmitBtn>
          Get Started
          <styled.RightArrow />
        </styled.SubmitBtn>
      </styled.Wrapper>
    </styled.Subscribe>
  );
}
