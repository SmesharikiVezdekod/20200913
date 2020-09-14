import React from "react";
import {Card} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import View from "@vkontakte/vkui/dist/components/View/View";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import {Icon24ChevronRight, Icon28CalendarOutline, Icon28TargetOutline} from "@vkontakte/icons";
import "./TypePage.css"

function TypePage() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>Тип сбора</PanelHeader>
                <Group className={"type-content"}>
                    <Card className={"type-card"} mode={"tint"} onClick={() => {
                        window.location.href = "/onetime"
                    }}>
                        <div className={"type-card-content"}>
                            <div className={"type-card-content-left"}>
                                <Icon28TargetOutline fill={"#3F8AE0"}/>
                                <div className={"type-text-block"}>
                                    <span className={"type-title"}>Целевой сбор</span>
                                    <span className={"type-subtitle"}>Когда есть определённая цель</span>
                                </div>
                            </div>
                            <div className={"type-arrow"}>
                                <Icon24ChevronRight fill={"#B8C1CC"}/>
                            </div>
                        </div>
                    </Card>
                    <Card className={"type-card"} mode={"tint"} onClick={() => {
                        window.location.href = "/repetitive"
                    }}>
                        <div className={"type-card-content"}>
                            <div className={"type-card-content-left"}>
                                <Icon28CalendarOutline fill={"#3F8AE0"}/>
                                <div className={"type-text-block"}>
                                    <span className={"type-title"}>Регулярный сбор</span>
                                    <span className={"type-subtitle"}>Если помощь нужна ежемесячно</span>
                                </div>
                            </div>
                            <div className={"type-arrow"}>
                                <Icon24ChevronRight fill={"#B8C1CC"}/>
                            </div>
                        </div>
                    </Card>
                </Group>
            </Panel>
        </View>
    );
}

export default TypePage;