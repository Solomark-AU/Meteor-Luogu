#include <cstring>
#include <iostream>

using namespace std;

int main()
{
    cout << "Start!" << endl;
    freopen("page-css.css", "r", stdin);
    freopen("var-css.out", "w", stdout);
    string s = "";
    char c = '0';
    while (c != EOF)
    {
        c = getchar();
        if (c == '\n')
        {
            cout << "\"" << s << "\"," << endl;
            s = "";
        }
        else
            s = s + c;
    }
    return 0;
}