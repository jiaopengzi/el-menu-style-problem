/*
 * FilePath    : test-menu\src\types.ts
 * Description : 类型
 */

export interface MenuItem {
    index: string // 菜单索引
    text: string // 显示名称
}

export type MenuItemMap<T extends string> = {
    [key in T]: MenuItem
}

export enum TestIndex {
    Test1 = "Test1",
    Test2 = "Test2",
    Test3 = "Test3",
    Test4 = "Test4",
    Test5 = "Test5",
    Test6 = "Test6",
    Test7 = "Test7",
    Test8 = "Test8",
    Test9 = "Test9",
    Test10 = "Test10",
    Test11 = "Test11",
    Test12 = "Test12",
    Test13 = "Test13",
    Test14 = "Test14",
    Test15 = "Test15",
}

// test 菜单项映射表
export type TestMenuItemMap = MenuItemMap<TestIndex>
