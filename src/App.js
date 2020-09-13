import React from 'react';
import './App.css';

import View from "@vkontakte/vkui/dist/components/View/View";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import '@vkontakte/vkui/dist/vkui.css';
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

function App() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>Целевой сбор</PanelHeader>
                <Placeholder
                    stretched={true}
                    action={<Button>Создать сбор</Button>}
                    header={<Text weight={"regular"}>У вас пока нет сборов. <br/> Начните доброе дело.</Text>} />
            </Panel>
        </View>
    );
}

export default App;
