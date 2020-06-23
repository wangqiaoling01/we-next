/**
 * @description Italic test
 * @author liuwei
 */

import createEditor from '../fns/create-editor'
import Editor from '../../src/editor'
import Italic from '../../src/menus/italic/index'
import mockCmdFn from '../fns/command-mock'
import { getMenuInstance } from '../fns/menus'

let editor: Editor
let italicMenu: Italic

test('斜线', () => {
    editor = createEditor(document, 'div1') // 赋值给全局变量

    // 找到 Italic 菜单
    italicMenu = getMenuInstance(editor, Italic) as Italic

    // 执行点击事件，模拟斜线
    mockCmdFn(document)
    ;(italicMenu as Italic).clickHandler()
    expect(document.execCommand).toBeCalledWith('italic', false, undefined) // mock fn 被调用
})
