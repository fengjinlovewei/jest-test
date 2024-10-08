import Util from './util';

/**
 * 单元测试：只对我的功能点做测试。
 * 集成测试：把我的功能点想依赖的其他功能点一起做测试。
 */

/**
 * 【☆单元测试为什么要引入 mock ？】
 * 【mock可以让我们的目标文件引入的外部文件变得简单，运行起来更加的快速】
 *
 * 当有一个方法实例化一个类并且使用的场景时，如下代码。
 * 那么我们想去测试这个方法中，类是否被实例化了，并且这个类的
 * 方法是不是也被执行过了。在这个例子中就是 a 和 b 方法。
 *
 * 但其实我们并不需要真正的执行a和b，只需要知道a和b执行过就好了，
 * 1. 首先是因为我们关注的是demo这个文件，而不是Util！
 * 2. 其次因为a和b很可能是一个很耗时的方法，或者有很多异步耗时方法，这样会拖慢测试，
 * 所以可以通过mock来处理这样的问题。
 */

const demoFunction = (a, b) => {
  const util = new Util('x', 'xx');
  util.a(a);
  util.b(b);
};

export default demoFunction;
