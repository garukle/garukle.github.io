import {useState, useMemo} from 'react'
import MenuView from './MenuView';
import PreviewView from './PreviewView';
import ChannelView from './ChannelView';
import './App.css'

/*
 * MENU is the default VIEW, showing all the channels.
 * PREVIEW is set when a channel is selected.
 * CHANNEL is set when a channel is opened from its PREVIEW.
 */
const VIEW = {
  MENU: 'menu', PREVIEW: 'preview', CHANNEL: 'channel'
};

function App() {
  const [view, setView] = useState(VIEW.MENU);
  const [currPage, setCurrPage] = useState(0);
  const [openChannel, setOpenChannel] = useState(null);

  const channelsPerPage = 12;

  // Channel data. As more channels are made, the array will shrink.
  const channels = useMemo(() => [
    {id: 1, name: 'Art'},
    ...Array.from({length: 47}, (_, i) => ({id: i + 2, name: 'Wii'}))],[]
  );
  
  const pages = useMemo(() => {
    const result = [];

    for(let i = 0; i < channels.length; i += channelsPerPage) {
      result.push(channels.slice(i, i + channelsPerPage));
    }

    return result;
  }, [channels]);
 
  const channelSelect = (id) => {
    const channel = channels.find(c => c.id === id);
    if (!channel) return;
    setOpenChannel(channel);
    setView(VIEW.PREVIEW);
  };

  return (
    <main>
      {view === VIEW.MENU && (<MenuView 
        pages = {pages} 
        currPage = {currPage} 
        setCurrPage = {setCurrPage} 
        onChannelSelect = {channelSelect} 
      />)}
    
      {view === VIEW.PREVIEW && openChannel && (<PreviewView
        channel = {openChannel}
        onBack = {() => setView(VIEW.MENU)}
        onOpen = {() => setView(VIEW.CHANNEL)}
      />)}

      {view === VIEW.CHANNEL && openChannel && (<ChannelView
        channel = {openChannel}
        onBack = {() => setView(VIEW.MENU)}
      />)}
    
    </main>
  );
}

export default App