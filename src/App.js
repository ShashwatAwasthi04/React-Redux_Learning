import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content,HeaderRow} from 'react-mdl';
import {Switch,Route,Link} from 'react-router-dom';
import Landing from './components/landing';
import myResume from './components/myresume';
import projects from './components/projects';
import intro from './components/intro';
import Contact from './components/contactme';

import {CSSTransition , TransitionGroup} from 'react-transition-group';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header" waterfall hideTop>
            <HeaderRow title="Title">
                <h4>This is Shashwat Awasthi's Portfolio Website</h4>
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <Link to="/">Back to Home Page</Link>
                    <Link to="/resume">Check Resume</Link>
                    <Link to="/intro">Who Am I?</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Back to Home Page</Link>
                <Link to="/resume">Check Resume</Link>
                <Link to="/intro">Who Am I?</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    timeout={3000000}
                    classNames="fade"
                    >
                    <Switch location={location}>
                        <Route exact path="/" component={Landing} />
                        <Route path="/resume" component={myResume} />
                        <Route path="/projects" component={projects} />
                        <Route path="/intro" component={intro} />
                        <Route path="/contact" component={Contact} />
                </Switch>
                </CSSTransition>
            </TransitionGroup>
            )} />
            
        </Content>
    </Layout>
</div>
  );
}

export default App;




