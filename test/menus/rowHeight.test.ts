/**
 * @description rowHeight menu
 * @author lichunlin
 */

import Editor from '../../src/editor'
import createEditor from '../fns/create-editor'
import mockCmdFn from '../fns/command-mock'
import rowHeight from '../../src/menus/rowheight/index'
import { getMenuInstance } from '../fns/menus'

let editor: Editor
let rowHeightMenu: rowHeight

test('rowHeight 菜单：dropList', () => {
    editor = createEditor(document, 'div1') // 赋值给全局变量
    rowHeightMenu = getMenuInstance(editor, rowHeight) as rowHeight // 赋值给全局变量
    expect(rowHeightMenu.dropList).not.toBeNull()
    rowHeightMenu.dropList.show()
    expect(rowHeightMenu.dropList.isShow).toBe(true)
    rowHeightMenu.dropList.hide()
    expect(rowHeightMenu.dropList.isShow).toBe(false)
})

test('rowHeight 菜单：增加行高', () => {
    mockCmdFn(document)
    const cmdVal = '2'
    rowHeightMenu.command(cmdVal)

    // 此处触发 editor.cmd.do('insertHTML', xx)，可以被 jest 成功执行，具体参考 mockCmdFn 的描述
    expect(
        editor.$textElem.html().indexOf(`<p style="line-height:${cmdVal};"><br></p>`)
    ).toBeGreaterThan(0)

})
