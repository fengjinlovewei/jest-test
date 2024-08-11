export const timer1 = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};

export const timer2 = (callback) => {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
};

export const timer3 = (callback) => {
  setTimeout(async () => {
    // 使用 promise阻塞也会出问题
    // 因为 advanceTimersByTime 只会让宏任务的执行，对微任务队列
    // 不起作用，所以卡在这不会执行
    // await new Promise((res) => {
    //   setTimeout(res, 1000);
    // });

    // 使用这种方式阻塞会出问题
    // 因为我看官网有一段描述：
    // 这些宏任务应在msToRun几毫秒内运行完, 但是我把阻塞时间设置为1毫秒
    // 测试依然无法完成！设置为0就可以完成，真是很奇怪！
    // const a = Date.now();
    // for (;;) {
    //   if (Date.now() - a >= 1) {
    //     break;
    //   }
    // }

    callback();

    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
};
