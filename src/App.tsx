import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Input } from 'antd';
import { Button, Flex, notification, Radio, Image } from 'antd';
import { maxHeaderSize } from 'http';
import { Card, Col, Row } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Cards: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const addCard = (id: string) => {
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, id]);
  };

  const removeCard = (id: string) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.filter((cardId) => cardId !== id)
    );
  };

  const cardClicked = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.id;
    const currentColor = event.currentTarget.style.backgroundColor;
    if (currentColor === 'red') {
      event.currentTarget.style.backgroundColor = 'white';
      removeCard(id);
    } else {
      event.currentTarget.style.backgroundColor = 'red';
      addCard(id);
    }
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Ecologie"
            bordered={false}
            id="1"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('1') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Pollution"
            bordered={false}
            id="2"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('2') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Le cacaaa"
            bordered={false}
            id="3"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('3') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
      </Row>

      <div style={{ margin: '20px' }}></div>

      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Nouvelle carte 1"
            bordered={false}
            id="4"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('4') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
    
        <Col span={8}>
          <Card
            title="Nouvelle carte 2"
            bordered={false}
            id="5"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('5') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Nouvelle carte 3"
            bordered={false}
            id="6"
            onClick={cardClicked}
            style={{
              backgroundColor: selectedCards.includes('6') ? 'red' : 'white',
            }}
          >
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

function Trash({ selectedCards, check }: { selectedCards: string[], check: () => void }) {
  const handleTrashClick = () => {
    check();
    alert('Vous avez cliqué sur la poubelle');
  };

  return (
    <Image
      height={300}
      width={200}
      preview={false}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Trash_can1.svg/640px-Trash_can1.svg.png"
      onClick={handleTrashClick}
    />
  );
}

function GoodBac () {
  return (
    <Image
    height={300}
    width={200}
    preview={false}
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Trash_bin.svg/640px-Trash_bin.svg.png"
    onClick={() => {alert('Vous avez cliqué sur la poubelle')}}
   />
  );
}

interface CarteReponseProps {
  contentText: string;
}

function CarteReponse({ contentText }: CarteReponseProps) {
  return (
     <Card bordered={false} >
      { contentText }
      </Card>
  );
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />)
];

const App: React.FC = () => {
  const [list_of_cards, setList_of_cards] = useState([]) as any[];
  const buttonClicked = [] as any;

  const cardClickedV2 = (id:any) => {
    buttonClicked.push(id);

    {alert('Ajouter')};
  };
  useEffect(() => {
    setList_of_cards([
      {
        id: 1,
        content: 'Ecologie',
      },
      {
        id: 2,
        content: 'Pollution',
      },
      {
        id: 3,
        content: 'Le caca',
      },
    ]);
    console.log(list_of_cards);
    
  }, []);
    

  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 5,
    });
  };

  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  
  const check = () => {
    // Get the selected cards
    console.log(selectedCards);

    // Remove the selected cards from the state
      const selectedCardElements = document.querySelectorAll('.selected-card');
      selectedCardElements.forEach((cardElement) => {
      cardElement.classList.remove('selected-card');
      cardElement.parentNode?.removeChild(cardElement);
    });
  };

  
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsedWidth={0} onCollapse={(value) => setCollapsed(value)}>
      <Layout>
      <Content>
        <Row gutter={16}>
          <Card bordered={true}>
            hey mon giga
          </Card>
          <Card bordered={true}>
            je te reponds
          </Card>
        </Row>
      </Content>
      <Footer>
        <Input placeholder="Vous doutez de quelque chose, dîtes moi?">
        </Input>
      </Footer>
    </Layout>
      </Sider>
      <Layout>
        {contextHolder}
        <Header style={{ padding: 0, background: colorBgContainer, textAlign:  'center' }}>
          <Button type="primary" onClick={openNotification}>Hall of Fame</Button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb >
             <div className="App-main">
              <Cards />
              {/*{list_of_cards.map((card : any) => (
                <Card bordered={false} id={card.id} onClick={() => cardClickedV2(card.id)}>
                  { card.content }
                </Card>  
              ))
              }*/}
             </div>
        </Content>
        <Footer >
            <GoodBac />
            <Trash selectedCards={[]} check={check} />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;