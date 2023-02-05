import { Injectable } from "@angular/core";
import G6, { ModelConfig } from '@antv/g6';


@Injectable()
export class G6RegisterNodeService {

    public registerNode() {
        console.log('registerNode()');
        G6.registerNode(
            'tree-node',
            {
                drawShape: function drawShape(cfg, group) {
                    const rect = group.addShape('rect', {
                        attrs: {
                            fill: '#fff',
                            stroke: '#666',
                            x: 0,
                            y: 0,
                            width: 10,
                            height: 10
                        },
                        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                        name: 'rect-shape',
                    });
                    const content = cfg.name;
                    const text = group.addShape('text', {
                        attrs: {
                            text: content,
                            x: 0,
                            y: 0,
                            textAlign: 'left',
                            textBaseline: 'middle',
                            fill: '#666',
                        },
                        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                        name: 'text-shape',
                    });
                    const bbox = text.getBBox();
                    const hasChildren = cfg.children;
                    rect.attr({
                        x: -bbox.width / 2 - 4,
                        y: -bbox.height / 2 - 6,
                        width: bbox.width + (hasChildren ? 26 : 12),
                        height: bbox.height + 12,
                    });
                    text.attr({
                        x: -bbox.width / 2,
                        y: 0
                    })
                    if (hasChildren) {
                        group.addShape('marker', {
                            attrs: {
                                x: bbox.width / 2 + 12,
                                y: 0,
                                r: 6,
                                symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
                                stroke: '#666',
                                lineWidth: 2,
                            },
                            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                            name: 'collapse-icon',
                        });
                    }
                    return rect;
                },
                update: (cfg, item) => {
                    const group = item.getContainer();
                    const icon = group.find((e) => e.get('name') === 'collapse-icon');
                    icon.attr('symbol', cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse);
                },
            },
            'single-node',
        );
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