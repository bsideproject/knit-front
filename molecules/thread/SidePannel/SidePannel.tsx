import { FC, memo, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import {
  ImageIcon,
  VideoIcon,
  SmileIcon,
  LineIcon,
  CodeIcon,
  LinkIcon,
  QuoteIcon,
  GridIcon,
} from '~/public/assets/icon';
import { Container, IconContainer } from './SidePannel.styled';
import { promptFileSelector } from '~/utils/file';
import { ContentType, DeviderType } from '~/@types/resources/thread';
import { CreatedContent } from './types';
import EmojiPicker, { Emoji } from './EmojiPicker';
import DeviderPicker from './DeviderPicker';
import { createDeviderContent } from '../Contents/helpers';

interface Props {
  onContentCreated: (createdContent: CreatedContent) => void;
}

const SidePannel: FC<Props> = ({ onContentCreated }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [emojiPickerOpened, setEmojiPickerOpened] = useState(false);
  const [deviderPickerOpened, setDeviderPickerOpened] = useState(false);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      if (!ref.current || !ref.current.parentElement || !document.scrollingElement) return;
      const diff = 30 - ref.current.parentElement.offsetTop + document.scrollingElement.scrollTop;
      ref.current.style.transform = `translate(0, ${Math.max(diff, 0)}px)`;
    }, 15);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickImageIcon = async () => {
    const file = await promptFileSelector();
    console.log(file);
  };

  const handleSelectEmoji = (emoji: Emoji) => {
    setEmojiPickerOpened(false);
    onContentCreated({
      type: ContentType.EMOJI,
      emoji: emoji.emoji,
    });
  };

  const handleSelectDevider = (deviderType: DeviderType) => {
    setDeviderPickerOpened(false);
    onContentCreated(createDeviderContent(deviderType));
  };

  return (
    <Container ref={ref} onMouseDown={(event) => event.preventDefault()}>
      <IconContainer onClick={handleClickImageIcon}>
        <ImageIcon />
      </IconContainer>
      <IconContainer>
        <VideoIcon />
      </IconContainer>
      <IconContainer onClick={() => setEmojiPickerOpened(true)}>
        <SmileIcon />
        {emojiPickerOpened && (
          <EmojiPicker
            onSelect={handleSelectEmoji}
            onClickOutside={() => setEmojiPickerOpened(false)}
          />
        )}
      </IconContainer>
      <IconContainer onClick={() => setDeviderPickerOpened(true)}>
        <LineIcon />
        {deviderPickerOpened && (
          <DeviderPicker
            onSelect={handleSelectDevider}
            onClickOutside={() => setDeviderPickerOpened(false)}
          />
        )}
      </IconContainer>
      <IconContainer>
        <CodeIcon />
      </IconContainer>
      <IconContainer>
        <LinkIcon />
      </IconContainer>
      <IconContainer>
        <QuoteIcon />
      </IconContainer>
      <IconContainer>
        <GridIcon />
      </IconContainer>
    </Container>
  );
};

export default memo<FC<Props>>(SidePannel);
