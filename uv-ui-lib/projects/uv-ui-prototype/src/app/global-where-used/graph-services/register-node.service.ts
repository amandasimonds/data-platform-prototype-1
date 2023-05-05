import { Injectable } from "@angular/core";
import G6, { ModelConfig, IGroup } from '@antv/g6';

export const ComboNode2 = {

    afterDraw(cfg: any, graphics: IGroup): void {
        let count = cfg.children.length.toString()
        graphics.addShape('rect', {
            attrs: {
                y: -13,
                x: -89,
                width: 24 + count.length * 2,
                height: 26,
                radius: 2,
                stroke: '#9A7DF3',
                lineWidth: 1.4,
                fill: '#ffffff',
            },
            name: 'group-count-rect'
        });

        graphics.addShape('text', {
            attrs: {
                textBaseline: 'middle',
                textAlign: 'center',
                y: 1,
                x: -77 + count.length,
                lineHeight: 14,
                text: count,
                fill: '#232323',
                fontWeight: 600
            },
            name: 'group-count-text',
        });
    },

    NODE_TYPE_NAME: 'combo-node',
    PARENT_NODE_TYPE_NAME: 'rect'
};

export const ComboNode = {
    drawShape(cfg: any, group: any) {
        const self: any = this;
        // Get the padding from the configuration
        cfg.padding = cfg.padding || [50, 20, 20, 20];
        const childrenCount = cfg.children.length;
        cfg.fixCollapseSize = (childrenCount * 0.1) * 2;
        cfg.label = cfg.label + ' \n Item Count: ' + childrenCount;
        // Get the shape's style, where the style.width and style.height correspond to the width and height in the figure of Illustration of Built-in Rect Combo
        const style: any = self.getShapeStyle(cfg);
        // Add a rect shape as the keyShape which is the same as the extended rect Combo
        const circle: any = group.addShape('circle', {
            attrs: {
                ...style,
                x: -style.width / 2 - (cfg.padding[3] - cfg.padding[1]) / 2,
                y: -style.height / 2 - (cfg.padding[0] - cfg.padding[2]) / 2,
                width: style.width,
                height: style.height,
            },
            draggable: true,
            name: 'combo-keyShape', // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type

        });
        // Add the button on the right
        group.addShape('rect', {
            attrs: {
                ...style,
                fill: 'white',
                opacity: 1,
                // cfg.style.width and cfg.style.heigth correspond to the innerWidth and innerHeight in the figure of Illustration of Built-in Rect Combo
                x: cfg.style.width / 2 + cfg.padding[1],
                y: (cfg.padding[2] - cfg.padding[0]) / 2,
                width: 48,
                height: 24,
                stroke: '#BEBEBF',
                radius: 8,
                cursor: 'pointer',
            },
            draggable: true,
            name: 'combo-paginator', // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        });

        const nextPage = group.addShape('marker', {
            attrs: {
                symbol: function (x: number, y: number, r: number) {
                    return [['M', x, y], ['L', x + r, y + r], ['L', x + r * 2, y], ['Z']];
                },
                x: cfg.style.width / 2,
                y: cfg.style.height / 2,
                r: 5,
                fill: '#333',
                opacity: 0,
                cursor: 'pointer',
                // zIndex: 9999999
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: `next-page`,
        });
        return circle;

    },
    // Define the updating logic of the right circle
    afterUpdate: function afterUpdate(cfg: any, combo: any) {
        const group = combo.get('group');
        // Find the circle shape in the graphics group of the Combo by name
        const circle = group.find((ele: any) => ele.get('name') === 'combo-paginator');
        const nextPage = group.find((ele: any) => ele.get('name') === 'next-page');
        // Update the position of the right circle
        circle.attr({
            // cfg.style.width and cfg.style.heigth correspond to the innerWidth and innerHeight in the figure of Illustration of Built-in Rect Combo
            x: cfg.style.width / 2 + cfg.padding[1],
            y: (cfg.padding[2] - cfg.padding[0]) / 2,
        });
        nextPage.attr({
            // cfg.style.width and cfg.style.heigth correspond to the innerWidth and innerHeight in the figure of Illustration of Built-in Rect Combo
            x: cfg.style.width / 2 + cfg.padding[1],
            y: (cfg.padding[2] - cfg.padding[0]) / 2,
        });
        if (!cfg.collapsed) {
            nextPage.animate({
                opacity: 1

            })
            console.log('collapse', cfg.collapse, nextPage);
            // nextPage.attr({
            //     opacity: 1
            // })
        }
        console.log(cfg);

    },

}

@Injectable()
export class G6RegisterNodeService {

    public registerCustomNodes() {
        // G6.registerNode(ComboNode.NODE_TYPE_NAME, ComboNode as any, ComboNode.PARENT_NODE_TYPE_NAME);  
        G6.registerCombo('combo-node', ComboNode, 'circle');
    }

    private createComboNodeModel(id: string, label: string, children: any[]): ModelConfig {
        label = label.length <= 18 ? label : label.substring(0, 15) + '...';

        return {
            id,
            type: 'combo-node',
            label,
            size: [200, 55],
            children,
            labelCfg: {
                style: {
                    x: 15,
                    fill: '#152599',
                    fontWeight: 'bolder'
                }
            },
            style: {
                radius: [0, 20, 0, 0] as unknown as number,
                lineWidth: 1,
                stroke: '#5626EB',
                fill: '#ffffff'
            }
        };
    }
}