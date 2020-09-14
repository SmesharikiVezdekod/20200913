import View from "@vkontakte/vkui/dist/components/View/View";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import React from "react";
import "./MainPage.css"

function MainPage() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>Пожертвования</PanelHeader>
                <Placeholder
                    stretched={true}
                    action={<Button onClick={() => {window.location.href = "/type"}}>Создать сбор</Button>}
                    header={<Text className={"placeholder-text"} weight={"regular"}>У вас пока нет сборов. <br/> Начните доброе дело.</Text>} />
            </Panel>
        </View>
    );
}

export default MainPage;